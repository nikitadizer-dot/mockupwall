import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProgrammaticPageView from '@/components/ProgrammaticPage'
import { getPage, getPagesByGroup, pagePath } from '@/data/programmatic'

const SITE_URL = 'https://www.mockupwall.com'

export function generateStaticParams() {
  return getPagesByGroup('tools').map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getPage('tools', slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${SITE_URL}${pagePath(page)}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}${pagePath(page)}`,
    },
  }
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getPage('tools', slug)
  if (!page) notFound()
  return <ProgrammaticPageView page={page} />
}
