import type { ReactNode } from 'react'
import './MediaSection.css'

type MediaSectionProps = {
  image: string
  alt: string
  eyebrow?: string
  title: string
  children: ReactNode
  reverse?: boolean
}

export function MediaSection({ image, alt, eyebrow, title, children, reverse = false }: MediaSectionProps) {
  return (
    <div className={`media-block ${reverse ? 'media-block--reverse' : ''}`}>
      <div className="media-block__figure">
        <img src={image} alt={alt} />
      </div>
      <div className="media-block__text">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}
