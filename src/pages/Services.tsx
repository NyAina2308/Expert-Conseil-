import { PageHero } from '../components/PageHero'
import { MediaSection } from '../components/MediaSection'
import approachPhoto from '../assets/photos/services.jpg'
import './Services.css'

export function Services() {
  return (
    <>
      <PageHero
        title="Des solutions adaptées à chaque étape de votre croissance"
        subtitle="Une prise en charge rigoureuse de la saisie comptable jusqu'au conseil stratégique de direction."
      />

      <section className="section">
        <div className="container">
          <MediaSection
            image={approachPhoto}
            alt="Analyse d'indicateurs financiers"
            eyebrow="Notre approche"
            title="Des chiffres clairs pour des décisions éclairées"
          >
            <p>
              Chaque mission commence par un diagnostic précis de votre
              situation comptable et financière, pour bâtir ensuite un
              accompagnement réellement adapté à votre activité.
            </p>
          </MediaSection>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="service-module service-module--1">
            <div className="service-module__intro">
              <span className="service-module__index">01</span>
              <h2>Expertise &amp; Gestion Comptable Au Quotidien</h2>
              <p>
                Libérez-vous de la charge administrative avec une tenue
                comptable rigoureuse et conforme aux normes.
              </p>
            </div>
            <ul className="service-list">
              <li>Tenue et révision comptable intégrale.</li>
              <li>
                Établissement des bilans annuels, comptes de résultat et
                états financiers.
              </li>
              <li>
                Prise en charge des obligations fiscales et
                télétransmissions.
              </li>
              <li>
                Mise en conformité avec le Plan Comptable Général (PCG).
              </li>
            </ul>
          </div>

          <div className="service-module service-module--2">
            <div className="service-module__intro">
              <span className="service-module__index">02</span>
              <h2>Conseil Opérationnel &amp; Pilotage Financier</h2>
              <p>
                Éclairez vos choix stratégiques grâce à des indicateurs
                clairs et un suivi régulier.
              </p>
            </div>
            <ul className="service-list">
              <li>
                Conception de tableaux de bord et suivi de trésorerie.
              </li>
              <li>
                Analyse des coûts, marges et Besoin en Fonds de Roulement
                (BFR).
              </li>
              <li>
                Accompagnement à la création et au choix des régimes
                fiscaux.
              </li>
              <li>
                Support opérationnel lors d'investissements ou de
                restructurations.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
