import { useTranslation } from 'react-i18next'
import { Palette, Settings, ShoppingCart, BarChart3, QrCode } from 'lucide-react'

const Features = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Palette size={48} />,
      title: t('feature1Title'),
      description: t('feature1Description')
    },
    {
      icon: <Settings size={48} />,
      title: t('feature2Title'),
      description: t('feature2Description')
    },
    {
      icon: <ShoppingCart size={48} />,
      title: t('feature3Title'),
      description: t('feature3Description')
    },
    {
      icon: <BarChart3 size={48} />,
      title: t('feature4Title'),
      description: t('feature4Description')
    },
    {
      icon: <QrCode size={48} />,
      title: t('feature5Title'),
      description: t('feature5Description')
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>{t('featuresTitle')}</h2>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in-up">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
