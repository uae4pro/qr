import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QrCode, Smartphone, Users } from 'lucide-react'
import QRCode from 'qrcode'

const Hero = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateQRCode = async (url) => {
    try {
      const qrDataUrl = await QRCode.toDataURL(url, {
        width: 200,
        color: {
          dark: '#dc2626',
          light: '#ffffff'
        }
      })
      return qrDataUrl
    } catch (error) {
      console.error('Error generating QR code:', error)
      return ''
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Generate a demo URL for the restaurant
    const restaurantSlug = formData.restaurantName.toLowerCase().replace(/\s+/g, '-')
    const demoUrl = `https://qrmenu.app/${restaurantSlug}`

    // Generate QR code
    const qrUrl = await generateQRCode(demoUrl)
    setQrCodeUrl(qrUrl)

    // Show success message
    setShowSuccess(true)

    // Reset form after 10 seconds
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        restaurantName: '',
        ownerName: '',
        email: '',
        phone: ''
      })
      setQrCodeUrl('')
    }, 10000)
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="fade-in-up">{t('heroTitle')}</h1>
            <p className="hero-subtitle fade-in-up">{t('heroSubtitle')}</p>
            
            <div className="hero-stats fade-in-up">
              <div className="stat">
                <QrCode size={24} />
                <span>500+ {t('trustTitle').split(' ').slice(-2).join(' ')}</span>
              </div>
              <div className="stat">
                <Smartphone size={24} />
                <span>100% Mobile Friendly</span>
              </div>
              <div className="stat">
                <Users size={24} />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="hero-form">
            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="signup-form">
                <h3>{t('getStarted')}</h3>
                <div className="form-group">
                  <input
                    type="text"
                    name="restaurantName"
                    placeholder={t('restaurantName')}
                    value={formData.restaurantName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="ownerName"
                    placeholder={t('ownerName')}
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('email')}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('phone')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  {t('submit')}
                </button>
                <a
                  href="https://app--menu-craft-6678e952.base44.app"
                  className="btn btn-secondary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '0.5rem' }}
                >
                  {t('startFree')}
                </a>
              </form>
            ) : (
              <div className="success-message">
                <h3>{t('successTitle')}</h3>
                <p>{t('successMessage')}</p>
                {qrCodeUrl && (
                  <div className="qr-code-display">
                    <h4>Your QR Code:</h4>
                    <img src={qrCodeUrl} alt="QR Code" />
                    <p>Scan this code to access your menu</p>
                  </div>
                )}
                <a
                  href="https://app--menu-craft-6678e952.base44.app"
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '1rem' }}
                >
                  {t('getStarted')}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
