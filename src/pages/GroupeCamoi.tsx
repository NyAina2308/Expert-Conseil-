import { PageHero } from '../components/PageHero'
import { MediaSection } from '../components/MediaSection'
import missionPhoto from '../assets/photos/groupe-camoi.jpg'
import './GroupeCamoi.css'

export function GroupeCamoi() {
  return (
    <>
      <PageHero
        title="La force d'un réseau d'experts interconnectés"
        subtitle="Une vision transversale pour répondre à tous les enjeux financiers, juridiques et humains des entreprises."
      />

      <section className="section">
        <div className="container">
          <MediaSection
            image={missionPhoto}
            alt="Rencontre entre associés du Groupe CAMOI"
            eyebrow="Notre mission & vision"
            title="Un guichet unique pour vos enjeux de gestion"
          >
            <p>
              Offrir aux PME et grands comptes un guichet unique. Au-delà de la
              simple gestion des chiffres, nous traduisons vos données en
              leviers de rentabilité et de sécurité.
            </p>
          </MediaSection>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Les 3 entités du groupe</h2>
          </div>
          <div className="entities">
            <div className="entity-card entity-card--1 card-pattern">
              <div className="entity-card__mark">EC</div>
              <span className="entity-card__tag">Votre interlocuteur</span>
              <h3>Expert Conseils</h3>
              <p>
                Tenue comptable, conseils opérationnels, choix fiscaux et
                suivi de trésorerie.
              </p>
            </div>
            <div className="entity-card entity-card--2 card-pattern">
              <div className="entity-card__mark">CE</div>
              <span className="entity-card__tag">Audit &amp; expertise</span>
              <h3>Camoi Expertise</h3>
              <p>
                Cabinet référent en expertise comptable, commissariat aux
                comptes et audit financier.
              </p>
            </div>
            <div className="entity-card entity-card--3 card-pattern">
              <div className="entity-card__mark">CF</div>
              <span className="entity-card__tag">Formation</span>
              <h3>CFP ASFIFO</h3>
              <p>
                Centre de formation professionnelle dédié au renforcement des
                compétences pratiques des comptables et dirigeants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <blockquote>
            « Nous conseillons votre gestion, fiabilisons vos chiffres et
            formons vos équipes. »
          </blockquote>
        </div>
      </section>
    </>
  )
}
