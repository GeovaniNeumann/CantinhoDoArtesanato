'use client'

import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    src: '/carrossel/img1.jpg',
    alt: 'Artesanato em destaque 1',
    title: 'Peças Únicas',
    subtitle: 'Feitas com amor e dedicação',
    description: 'Cada peça conta uma história especial, criada manualmente com os melhores materiais.',
  },
  {
    src: '/carrossel/img2.jpg',
    alt: 'Artesanato em destaque 2',
    title: 'Decoração Artesanal',
    subtitle: 'Para todos os ambientes',
    description: 'Encante sua casa com nossas peças exclusivas que trazem aconchego e personalidade.',
  },
  {
    src: '/carrossel/img3.jpg',
    alt: 'Artesanato em destaque 3',
    title: 'Presenteie com Amor',
    subtitle: 'Lembranças que emocionam',
    description: 'Surpreenda quem você ama com um presente feito à mão, cheio de significado.',
  },
]

const AUTOPLAY_INTERVAL = 6000

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const isPaused = useRef(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Avança para o próximo slide — sem nenhum bloqueio, loop infinito garantido
  const advance = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length)
    setAnimKey(k => k + 1)
  }

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) advance()
    }, AUTOPLAY_INTERVAL)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAnimKey(k => k + 1)
    startAutoplay() // reinicia o timer ao clicar num dot
  }

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => { isPaused.current = true }}
      onMouseLeave={() => { isPaused.current = false }}
    >
      <div className="hero-carousel">
        <div className="carousel-track">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="slide-background"
              />
              <div className="slide-overlay" />
              <div className="slide-content">
                <div className="hero-content-wrapper">
                  <div
                    className="hero-text"
                    key={index === currentIndex ? animKey : -1}
                  >
                    <div className="hero-badge">Cantinho do Artesanato</div>
                    <h1 className="hero-title">
                      <span className="title-main">{slide.title}</span>
                      <span className="title-sub">{slide.subtitle}</span>
                    </h1>
                    <p className="hero-description">{slide.description}</p>
                    <div className="hero-buttons">
                      <a href="#gallery" className="btn btn-primary">
                        Ver Galeria
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                      <a href="#contact" className="btn btn-outline">
                        Fale Conosco
                      </a>
                    </div>
                  </div>
                  <div className="hero-image" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}