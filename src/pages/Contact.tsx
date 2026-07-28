import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import contactPhoto from '../assets/photos/contact.jpg'
import './Contact.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        title="Échangeons sur vos besoins"
        subtitle="Obtenez un diagnostic personnalisé de votre gestion comptable."
      />

      <section className="section">
        <div className="container contact-grid">
          {sent ? (
            <div className="form-success">
              Merci ! Votre demande a bien été envoyée, notre équipe vous
              recontactera très prochainement.
            </div>
          ) : (
            <form className="contact-form card-pattern" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Nom &amp; Prénom</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="form-field">
                  <label htmlFor="company">Nom de l'entreprise</label>
                  <input id="company" name="company" type="text" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Adresse email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Téléphone</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Objet de la demande</label>
                <select id="subject" name="subject" defaultValue="Tenue comptable complète">
                  <option>Tenue comptable complète</option>
                  <option>Conseil de gestion</option>
                  <option>Création d'entreprise</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message libre</label>
                <textarea id="message" name="message" rows={5} />
              </div>

              <button type="submit" className="btn btn-primary">
                Envoyer ma demande
              </button>
            </form>
          )}

          <aside className="contact-info">
            <img
              className="contact-info__photo"
              src={contactPhoto}
              alt="Échange avec l'équipe Expert Conseils"
            />
            <h3>Coordonnées &amp; accès</h3>
            <dl>
              <dt>Adresse</dt>
              <dd>Antananarivo, Madagascar</dd>
              <dt>Horaires</dt>
              <dd>Lundi – Vendredi, 08h00 – 17h00</dd>
            </dl>
            <ul className="contact-info__links">
              <li>
                <Link to="/groupe-camoi">→ Camoi Expertise</Link>
              </li>
              <li>
                <Link to="/groupe-camoi">→ CFP ASFIFO</Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
