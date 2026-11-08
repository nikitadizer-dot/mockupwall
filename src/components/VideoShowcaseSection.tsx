import ToolbarShowcase from '@/components/ToolbarShowcase'

const SITE_URL = 'https://www.mockupwall.com'

const videos = [
  {
    src: '/videos/app-demo-1.mov',
    poster: '/videos/app-demo-1-poster.jpg',
    title: 'Creating a 3D clothing mockup in the MockupWall app',
    caption: 'From flat photo to 3D mockup — spin and rotate it to check every angle',
  },
  {
    src: '/videos/app-demo-2.mov',
    poster: '/videos/app-demo-2-poster.jpg',
    title: 'Design tools in the MockupWall app: brush and text on garments',
    caption: 'Paint with the brush and drop text right onto the garment',
  },
]

const videoSchema = videos.map((v) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: v.title,
  description: v.caption,
  thumbnailUrl: `${SITE_URL}${v.poster}`,
  contentUrl: `${SITE_URL}${v.src}`,
  uploadDate: '2026-07-17T00:00:00+00:00',
  publisher: { '@type': 'Organization', name: 'MockupWall', url: SITE_URL },
}))

const VideoShowcaseSection = () => {
  return (
    <section id="demo" className="py-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div className="container">
        <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-5 fade-up">
          See It{' '}
          <span className="highlight">
            <span>In Action</span>
          </span>
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-[640px] mx-auto mb-14 fade-up delay-1">
          Every mockup is a true 3D model — spin it and view your design from any angle. Draw on
          the garment with the brush, drop text right onto the fabric, and do it all from a mobile
          app that’s faster than any desktop editor.
        </p>

        <div className="fade-up delay-2">
          <ToolbarShowcase />
        </div>

        <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
          {videos.map((v, i) => (
            <figure key={v.src} className={`fade-up ${i === 1 ? 'delay-1' : ''}`}>
              <div className="w-[260px] sm:w-[290px] rounded-[36px] border-[6px] border-[#1c1b18] bg-[#1c1b18] shadow-[0_40px_90px_rgba(0,0,0,0.6)] overflow-hidden">
                <video
                  controls
                  playsInline
                  muted
                  loop
                  preload="none"
                  poster={v.poster}
                  className="w-full aspect-[9/19.5] object-cover rounded-[30px] bg-black"
                >
                  <source src={v.src} type="video/quicktime" />
                  Your browser can’t play this video.
                </video>
              </div>
              <figcaption className="text-center text-sm text-muted-foreground mt-4 max-w-[280px] mx-auto">
                {v.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcaseSection
