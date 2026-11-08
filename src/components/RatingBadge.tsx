const Star = ({ fill = 1 }: { fill?: number }) => (
  <span className="relative inline-block w-5 h-5" aria-hidden="true">
    <svg viewBox="0 0 20 20" className="absolute inset-0 w-full h-full text-muted-foreground/30" fill="currentColor">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
    <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
      <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#f5a623]" fill="currentColor">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
      </svg>
    </span>
  </span>
)

const RatingBadge = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="font-heading text-3xl text-foreground leading-none">5.0</span>
      <span className="flex items-center gap-0.5">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>
      <span className="text-muted-foreground">on the App Store · free to download</span>
    </div>
  )
}

export default RatingBadge
