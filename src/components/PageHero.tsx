import type { ReactNode } from 'react'
import './PageHero.css'

type PageHeroProps = {
  title: string
  subtitle?: ReactNode
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
