import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'

const Pricing = () => {
  const { t } = useTranslation()
  const [isYearly, setIsYearly] = useState(true)

  const plans = [
    {
      name: t('starterTitle'),
      price: t('starterPrice'),
      monthlyPrice: t('starterPrice'),
      features: [
        t('starterFeatures.items'),
        t('starterFeatures.sections'),
        t('starterFeatures.social'),
        t('starterFeatures.noAds'),
        t('starterFeatures.analytics'),
        t('starterFeatures.seo'),
        t('starterFeatures.multiView'),
        t('starterFeatures.multiLang'),
        t('starterFeatures.about'),
        t('starterFeatures.hours'),
        t('starterFeatures.reviews'),
        t('starterFeatures.orders'),
        t('starterFeatures.tables')
      ],
      buttonText: t('startFree'),
      popular: false
    },
    {
      name: t('basicTitle'),
      price: t('basicPrice'),
      monthlyPrice: t('basicPriceMonthly'),
      savings: t('basicSavings'),
      features: [
        t('unlimited') + ' 100 ' + t('starterFeatures.items').split(' ').slice(-1)[0],
        t('unlimited') + ' 15 ' + t('starterFeatures.sections').split(' ').slice(-1)[0],
        t('starterFeatures.social'),
        t('starterFeatures.noAds'),
        t('starterFeatures.analytics'),
        t('starterFeatures.seo'),
        t('starterFeatures.multiView'),
        t('starterFeatures.multiLang'),
        t('starterFeatures.about'),
        t('starterFeatures.hours'),
        t('starterFeatures.reviews'),
        t('starterFeatures.orders'),
        t('starterFeatures.tables')
      ],
      buttonText: t('startFree'),
      popular: false
    },
    {
      name: t('premiumTitle'),
      price: t('premiumPrice'),
      monthlyPrice: t('premiumPriceMonthly'),
      savings: t('premiumSavings'),
      features: [
        t('unlimited') + ' ' + t('starterFeatures.items').split(' ').slice(-1)[0],
        t('unlimited') + ' ' + t('starterFeatures.sections').split(' ').slice(-1)[0],
        t('starterFeatures.social'),
        t('starterFeatures.noAds'),
        t('starterFeatures.analytics'),
        t('starterFeatures.seo'),
        t('starterFeatures.multiView'),
        t('starterFeatures.multiLang'),
        t('starterFeatures.about'),
        t('starterFeatures.hours'),
        t('starterFeatures.reviews'),
        t('starterFeatures.orders'),
        t('starterFeatures.tables')
      ],
      buttonText: t('startFree'),
      popular: true
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>{t('pricingTitle')}</h2>
          
          <div className="pricing-toggle">
            <span className={!isYearly ? 'active' : ''}>{t('monthly')}</span>
            <button 
              className="toggle-switch"
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className={`toggle-slider ${isYearly ? 'yearly' : 'monthly'}`}></span>
            </button>
            <span className={isYearly ? 'active' : ''}>
              {t('yearly')} 
              <span className="savings-badge">{t('twoMonthsFree')}</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">{t('mostPopular')}</div>
              )}
              
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="price-amount">
                    {isYearly ? plan.price : plan.monthlyPrice}
                  </span>
                </div>
                {plan.savings && isYearly && (
                  <p className="savings">{plan.savings}</p>
                )}
              </div>

              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <Check size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn btn-primary btn-lg">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
