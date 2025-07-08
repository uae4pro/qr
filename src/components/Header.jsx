import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setIsLangMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h2 style={{ color: 'var(--primary-red)', margin: 0 }}>QR Menu</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#home" onClick={() => scrollToSection('home')}>{t('home')}</a>
            <a href="#features" onClick={() => scrollToSection('features')}>{t('featuresTitle')}</a>
            <a href="#pricing" onClick={() => scrollToSection('pricing')}>{t('pricing')}</a>
          </nav>

          {/* Desktop Actions */}
          <div className="header-actions">
            {/* Language Selector */}
            <div className="language-selector">
              <button 
                className="language-btn"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <Globe size={20} />
                <span>{i18n.language === 'ar' ? 'العربية' : 'English'}</span>
              </button>
              {isLangMenuOpen && (
                <div className="language-menu">
                  <button onClick={() => toggleLanguage('ar')}>العربية</button>
                  <button onClick={() => toggleLanguage('en')}>English</button>
                </div>
              )}
            </div>
            
            <button className="btn btn-secondary">{t('login')}</button>
            <button className="btn btn-primary">{t('getStarted')}</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <a href="#home" onClick={() => scrollToSection('home')}>{t('home')}</a>
            <a href="#features" onClick={() => scrollToSection('features')}>{t('featuresTitle')}</a>
            <a href="#pricing" onClick={() => scrollToSection('pricing')}>{t('pricing')}</a>
            <div className="mobile-actions">
              <button className="btn btn-secondary">{t('login')}</button>
              <button className="btn btn-primary">{t('getStarted')}</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
