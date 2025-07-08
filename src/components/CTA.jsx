import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>{t('ctaTitle')}</h2>
          <p>{t('ctaSubtitle')}</p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={scrollToTop}
          >
            {t('startFree')}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
