import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Twitter, MessageCircle, Linkedin } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>QR Menu</h3>
            <p>{t('ctaSubtitle')}</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>{t('home')}</h4>
              <a href="#features">{t('featuresTitle')}</a>
              <a href="#pricing">{t('pricing')}</a>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircle size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
