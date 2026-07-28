type LogoProps = {
  className?: string
  /** "full" = icon + wordmark, "mark" = icon only */
  variant?: 'full' | 'mark'
  /** When true, renders the wordmark in white (for dark backgrounds like the footer) */
  light?: boolean
}

export function Logo({ className, variant = 'full', light = false }: LogoProps) {
  const textColor = light ? '#ffffff' : 'var(--navy)'

  return (
    <svg
      className={className}
      viewBox={variant === 'full' ? '0 0 300 210' : '0 0 300 130'}
      role="img"
      aria-label="Expert Conseils"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Expert Conseils</title>
      <g fill="none" strokeWidth="20" strokeLinejoin="round">
        <rect x="30" y="20" width="80" height="80" rx="20" transform="rotate(45 70 60)" stroke="var(--navy)" />
        <rect x="90" y="20" width="80" height="80" rx="20" transform="rotate(45 130 60)" stroke="var(--blue)" />
        <rect x="150" y="20" width="80" height="80" rx="20" transform="rotate(45 190 60)" stroke="var(--teal)" />
      </g>
      {variant === 'full' && (
        <text
          x="150"
          y="150"
          textAnchor="middle"
          fontFamily="var(--heading), sans-serif"
          fontWeight="700"
        >
          <tspan x="150" dy="0" fontSize="46" fill={textColor}>
            Expert
          </tspan>
          <tspan x="150" dy="50" fontSize="46" fill={textColor}>
            Conseils
          </tspan>
        </text>
      )}
    </svg>
  )
}
