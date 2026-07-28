import { Link } from 'react-router-dom'
import heroPhoto from '../assets/photos/hero-home.jpg'
import './Home.css'

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow">Comptabilité &amp; Conseil de Gestion</span>
            <h1>Sécurisez vos chiffres, propulsez vos décisions.</h1>
            <p>
              Expert Conseils accompagne les dirigeants au quotidien dans la
              tenue comptable, la conformité fiscale et le pilotage financier
              de leur entreprise.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">
                Demander un diagnostic
              </Link>
              <Link to="/services" className="btn btn-outline">
                Voir nos services
              </Link>
            </div>
          </div>
          <div className="hero__figure">
            <img src={heroPhoto} alt="Expert-comptable analysant des documents financiers" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Nos 2 domaines d'expertise</h2>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card card-pattern">
              <span className="expertise-card__index">01</span>
              <h3>Tenue Comptable &amp; Conformité Fiscale</h3>
              <p>Gestion intégrale de votre comptabilité au quotidien.</p>
            </div>
            <div className="expertise-card card-pattern">
              <span className="expertise-card__index">02</span>
              <h3>Conseil Opérationnel &amp; Pilotage Financier</h3>
              <p>Tableaux de bord et accompagnement stratégique.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="network-banner">
            <div className="network-banner__text">
              <h2>Un membre clé du Groupe CAMOI</h2>
              <p>
                Profitez d'une prise en charge globale combinant conseil de
                gestion, audit financier (Camoi Expertise) et formation
                continue des équipes (CFP ASFIFO).
              </p>
            </div>
            <Link to="/groupe-camoi" className="btn">
              Découvrir l'écosystème CAMOI
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Prêt à optimiser la gestion de votre entreprise ?</h2>
          <Link to="/contact" className="btn btn-primary">
            Prendre Rendez-vous
          </Link>
        </div>
      </section>
    </>
  )
}
