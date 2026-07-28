import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo variant="full" light className="site-footer__logo" />
          <p>
            Cabinet de comptabilité et de conseil de gestion, membre du Groupe
            CAMOI, au service des dirigeants d'Antananarivo.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/groupe-camoi">Groupe CAMOI</Link>
            </li>
            <li>
              <Link to="/services">Nos Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Entités partenaires</h4>
          <ul>
            <li>Camoi Expertise — Audit &amp; commissariat aux comptes</li>
            <li>CFP ASFIFO — Formation professionnelle</li>
          </ul>
        </div>

        <div>
          <h4>Coordonnées</h4>
          <ul>
            <li>Antananarivo, Madagascar</li>
            <li>Lundi – Vendredi, 08h00 – 17h00</li>
            <li>
              <Link to="/contact">Prendre rendez-vous</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <span>© {new Date().getFullYear()} Expert Conseils — Groupe CAMOI. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  )
}
