#!/usr/bin/env node
/**
 * Weekly Google Search Console report for mockuptool.app.
 *
 * Pulls the last completed 7-day window and the 7 days before it — by query and
 * by page — computes week-over-week deltas, and prints a report with
 * conclusions (top movers, queries on the edge of page 1, high-impression
 * zero-click queries, top pages).
 *
 * Auth: a Google service account with read access to the GSC property.
 *   1. Google Cloud → enable "Search Console API", create a service account,
 *      download its JSON key.
 *   2. Search Console → Settings → Users and permissions → add the
 *      service-account email (…@….iam.gserviceaccount.com). "Restricted"
 *      (read) is enough.
 *   3. Provide the key via ONE of:
 *        GSC_SA_KEY_JSON   inline service-account JSON (recommended as a secret)
 *        GSC_SA_KEY_FILE   path to the service-account JSON file
 *   4. Optional: GSC_SITE_URL — default https://www.mockuptool.app/ ;
 *      use "sc-domain:mockuptool.app" for a Domain property.
 *
 * Run: node scripts/gsc-report.mjs   (or: npm run gsc:report)
 */
import { GoogleAuth } from 'google-auth-library'
import { webmasters } from '@googleapis/webmasters'

const SITE_URL = process.env.GSC_SITE_URL || 'https://www.mockuptool.app/'
const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
const DAY = 864e5

function loadCredentials() {
  const { GSC_SA_KEY_JSON, GSC_SA_KEY_FILE } = process.env
  if (GSC_SA_KEY_JSON) {
    try {
      return { credentials: JSON.parse(GSC_SA_KEY_JSON) }
    } catch {
      throw new Error('GSC_SA_KEY_JSON is set but is not valid JSON.')
    }
  }
  if (GSC_SA_KEY_FILE) return { keyFile: GSC_SA_KEY_FILE }
  throw new Error(
    'No credentials. Set GSC_SA_KEY_JSON (inline JSON) or GSC_SA_KEY_FILE (path). ' +
      'See the header of this file for setup steps.'
  )
}

const iso = (d) => d.toISOString().slice(0, 10)

// GSC data lags ~2-3 days, so end the current window `lag` days back.
function windows(lag = 3, span = 7) {
  const curEnd = new Date(Date.now() - lag * DAY)
  const curStart = new Date(curEnd.getTime() - (span - 1) * DAY)
  const prevEnd = new Date(curStart.getTime() - DAY)
  const prevStart = new Date(prevEnd.getTime() - (span - 1) * DAY)
  return {
    cur: { startDate: iso(curStart), endDate: iso(curEnd) },
    prev: { startDate: iso(prevStart), endDate: iso(prevEnd) },
  }
}

async function query(wm, range, dimensions) {
  const res = await wm.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: { ...range, dimensions, rowLimit: 250 },
  })
  return res.data.rows || []
}

const index = (rows) => new Map(rows.map((r) => [r.keys[0], r]))
const pct = (a, b) => (b === 0 ? (a > 0 ? '+∞' : '0%') : `${(((a - b) / b) * 100).toFixed(0)}%`)

function movers(curRows, prevMap, key = 'impressions', n = 8) {
  return curRows
    .map((r) => {
      const p = prevMap.get(r.keys[0])
      const prev = p ? p[key] : 0
      return { k: r.keys[0], cur: r[key], prev, diff: r[key] - prev, r }
    })
    .sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff))
    .slice(0, n)
}

async function main() {
  const auth = new GoogleAuth({ ...loadCredentials(), scopes: SCOPES })
  const wm = webmasters({ version: 'v3', auth })
  const { cur, prev } = windows()

  console.log(`# GSC report — ${SITE_URL}`)
  console.log(`Current : ${cur.startDate} → ${cur.endDate}`)
  console.log(`Previous: ${prev.startDate} → ${prev.endDate}\n`)

  const [curQ, prevQ, curP, prevP, curTot, prevTot] = await Promise.all([
    query(wm, cur, ['query']),
    query(wm, prev, ['query']),
    query(wm, cur, ['page']),
    query(wm, prev, ['page']),
    query(wm, cur, []), // dimensionless = accurate totals (query breakdown hides anonymized clicks)
    query(wm, prev, []),
  ])

  const aggregate = (rows) =>
    rows[0] ? { clicks: rows[0].clicks, impressions: rows[0].impressions } : { clicks: 0, impressions: 0 }
  const tc = aggregate(curTot)
  const tp = aggregate(prevTot)
  const ctr = tc.impressions ? ((tc.clicks / tc.impressions) * 100).toFixed(2) : '0.00'
  console.log('## Totals (week over week)')
  console.log(`Clicks     : ${tc.clicks}  (${pct(tc.clicks, tp.clicks)} vs ${tp.clicks})`)
  console.log(`Impressions: ${tc.impressions}  (${pct(tc.impressions, tp.impressions)} vs ${tp.impressions})`)
  console.log(`CTR        : ${ctr}%\n`)

  const prevQMap = index(prevQ)
  console.log('## Top impression movers (queries)')
  for (const m of movers(curQ, prevQMap)) {
    console.log(
      `  ${m.diff >= 0 ? '▲' : '▼'} ${m.k} — ${m.prev}→${m.cur} impr · pos ${m.r.position.toFixed(1)} · ${m.r.clicks} clk`
    )
  }

  const edge = curQ
    .filter((r) => r.position >= 8 && r.position <= 20 && r.impressions >= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 12)
  console.log('\n## Opportunities — edge of page 1 (pos 8–20, ≥20 impr)')
  if (!edge.length) console.log('  (none)')
  for (const r of edge)
    console.log(`  pos ${r.position.toFixed(1)} · ${r.impressions} impr · ${r.clicks} clk · ${r.keys[0]}`)

  const zero = curQ
    .filter((r) => r.clicks === 0 && r.impressions >= 30)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 12)
  console.log('\n## High-impression, zero-click queries (≥30 impr, 0 clk)')
  if (!zero.length) console.log('  (none)')
  for (const r of zero) console.log(`  ${r.impressions} impr · pos ${r.position.toFixed(1)} · ${r.keys[0]}`)

  const prevPMap = index(prevP)
  console.log('\n## Top pages by clicks')
  for (const r of [...curP].sort((a, b) => b.clicks - a.clicks).slice(0, 10)) {
    const p = prevPMap.get(r.keys[0])
    console.log(
      `  ${r.clicks} clk · ${r.impressions} impr · pos ${r.position.toFixed(1)} · ${r.keys[0]}${
        p ? ` (was ${p.clicks} clk)` : ' (new)'
      }`
    )
  }

  console.log('\n## Conclusions')
  console.log(
    `- Visibility ${tc.impressions >= tp.impressions ? 'up' : 'down'} ${pct(
      tc.impressions,
      tp.impressions
    )} week over week (${tp.impressions}→${tc.impressions} impressions).`
  )
  if (edge.length)
    console.log(
      `- ${edge.length} queries sit just below page 1 — closest win: “${edge[0].keys[0]}” at pos ${edge[0].position.toFixed(
        1
      )} with ${edge[0].impressions} impressions.`
    )
  if (zero.length)
    console.log(
      `- ${zero.length} queries earn impressions but no clicks (title/snippet or just-below-fold): biggest “${zero[0].keys[0]}” (${zero[0].impressions} impr).`
    )
  if (tc.clicks === 0)
    console.log('- Still zero clicks overall — the edge-of-page-1 queries above are the fastest path to a first click.')
}

main().catch((e) => {
  console.error('GSC report failed:', e.message)
  if (/permission|403|forbidden|insufficient/i.test(e.message)) {
    console.error(
      '→ Check that the service-account email is added as a user on the property in Search Console, and that GSC_SITE_URL matches the property exactly (URL-prefix vs sc-domain).'
    )
  }
  process.exit(1)
})
