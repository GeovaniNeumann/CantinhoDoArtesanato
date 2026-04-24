'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const galleryItems = [
  // VÍDEOS (use caminhos diretos da pasta public)
  {
    type: 'video',
    src: '/videos/video1.mp4',
    poster: '',
    alt: 'Vídeo institucional 1',
    title: 'Nosso Trabalho',
    description: 'Processo criativo artesanal',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/videos/video2.mp4',
    poster: '',
    alt: 'Vídeo institucional 2',
    title: 'Artesanato em Detalhe',
    description: 'Cada peça feita com amor',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/videos/video3.mp4',
    poster: '',
    alt: 'Vídeo institucional 3',
    title: 'Momentos Especiais',
    description: 'Confecção de peças para ocasiões especiais  ',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/videos/video4.mp4',
    poster: '',
    alt: 'Vídeo institucional 4',
    title: 'Decoração Artesanal',
    description: 'Peças únicas para seu lar',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/videos/video5.mp4',
    poster: '',
    alt: 'Vídeo institucional 5',
    title: 'Nossa Paixão',
    description: 'O carinho em cada detalhe',
    category: 'videos',
  },
  // IMAGENS (com as 4 novas no início)
{
  type: 'image',
  src: 'https://i.ibb.co/B2TcbFpB/1-1.jpg',
  alt: 'Artesanato 1',
  title: 'Panos de prato decorado',
  description: 'Trabalho manual exclusivo',
  category: 'decoracao',  
},
{
  type: 'image',
  src: 'https://i.ibb.co/xqQyNzDt/3-1.jpg',
  alt: 'Artesanato 2',
  title: 'Panos feitos com crochê ',
  description: 'Detalhes feitos à mão',
  category: 'decoracao',
},
{
  type: 'image',
  src: 'https://i.ibb.co/VYJXKn5n/494179430-2457637137926736-3989313544039994880-n.jpg',
  alt: 'Puxa saco de cozinha',
  title: 'Puxa saco de cozinha',
  description: 'Arte e criatividade',
  category: 'decoracao',
},
{
  type: 'image',
  src: 'https://i.ibb.co/5W4SqVrS/2-1.jpg',
  alt: 'Artesanato 4',
  title: 'Panos de prato lindos',
  description: 'Vários modelos e estilos',
  category: 'decoracao',
},
{
  type: 'image',
  src: 'https://i.ibb.co/KpdC7tfv/482221549-674252061614924-8977492383106295716-n.jpg',
  alt: 'Boneca Rosa',
  title: 'Boneca Elegante',
  description: 'Boneca artesanal com vestido rosa',
  category: 'bonecas',
},
{
  type: 'image',
  src: 'https://i.ibb.co/LDRH9yCJ/Whats-App-Image-2026-04-23-at-15-46-12.jpg',
  alt: 'Painel de macrame',
  title: 'Painel de macrame',
  description: 'Painel artesanal de macrame',
  category: 'decoracao',
},
{
  type: 'image',
  src: 'https://i.ibb.co/svMX74Wd/Whats-App-Image-2026-04-23-at-15-46-58.jpg',
  alt: 'Boneca Especial',
  title: 'Boneca Especial',
  description: 'Decoração de banheiro',
  category: 'bonecas',
},
{
  type: 'image',
  src: 'https://i.ibb.co/bjn7nsPt/Whats-App-Image-2026-04-23-at-15-47-28.jpg',
  alt: 'Vaso de tulipas',
  title: 'Vaso de tulipas',
  description: 'Peças decorativas especiais',
  category: 'decoracao',
},
{
  type: 'image',
  src: 'https://i.ibb.co/KjFpm7xf/30442961-598707303819738-7578339634808094720-n.jpg',
  alt: 'Boneca Colorida',
  title: 'Decoração de cozinha',
  description: 'Cores vibrantes e alegres',
  category: 'bonecas',
},
{
  type: 'image',
  src: 'https://i.ibb.co/gLd7dD6t/30442573-598707397153062-5100383516378529792-n.jpg',
  alt: 'Boneca Delicada',
  title: 'Porta pano de prato',
  description: 'Decorado',
  category: 'bonecas',
},
{
  type: 'image',
  src: 'https://i.ibb.co/LXhSh5sw/Whats-App-Image-2026-04-23-at-15-48-01.jpg',
  alt: 'Artesanato',
  title: 'Pano de prato lavanda',
  description: 'Trabalho manual de qualidade',
  category: 'decoracao',
},
{
  type: 'image',
  src: 'https://i.ibb.co/TMcxMyRd/Whats-App-Image-2026-04-23-at-15-50-40.jpg',
  alt: 'Vaso de flores',
  title: 'Vaso de flores',
  description: 'Decoração de ambiente',
  category: 'decoracao',
},
{
  type: 'image',
  src: 'https://i.ibb.co/8gXJ5Gh4/485803172-683286077378189-2492603176058007886-n.jpg',
  alt: 'Casinha de natal',
  title: 'Casinha de natal',
  description: 'Decoração de natal',
  category: 'decoracao',
},
]

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = useCallback(() => {
    setModalOpen(false)
    document.body.style.overflow = 'auto'
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [])

  const navigate = useCallback((dir: 'prev' | 'next') => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setCurrentIndex((prev) =>
      dir === 'prev'
        ? (prev - 1 + galleryItems.length) % galleryItems.length
        : (prev + 1) % galleryItems.length
    )
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!modalOpen) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') navigate('prev')
      if (e.key === 'ArrowRight') navigate('next')
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [modalOpen, closeModal, navigate])

  const current = galleryItems[currentIndex]
  const isVideo = current.type === 'video'

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossa Galeria</h2>
            <p className="section-subtitle">Conheça algumas de nossas criações especiais</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="gallery-item"
                data-category={item.category}
                onClick={() => openModal(index)}
              >
                {item.type === 'video' ? (
                  <>
                    <video
                      className="gallery-img"
                      src={item.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="video-play-overlay">
                      <div className="play-icon">▶</div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="gallery-img"
                    unoptimized
                  />
                )}
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div 
        className={`modal${modalOpen ? ' open' : ''}`} 
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className="modal-content">
          <button className="close-modal" onClick={closeModal}>×</button>

          <div className="modal-nav">
            <button className="modal-nav-btn prev" onClick={() => navigate('prev')}>‹</button>
            <button className="modal-nav-btn next" onClick={() => navigate('next')}>›</button>
          </div>

          {modalOpen && (
            <>
              {isVideo ? (
                <video
                  ref={videoRef}
                  src={current.src}
                  controls
                  autoPlay
                  className="modal-video"
                  style={{ maxHeight: '80vh', maxWidth: '100%', borderRadius: '15px', marginBottom: '15px' }}
                />
              ) : (
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={800}
                  height={600}
                  style={{ maxHeight: '80vh', objectFit: 'contain', borderRadius: '15px', marginBottom: '15px' }}
                  unoptimized
                />
              )}
            </>
          )}

          <div className="modal-caption">
            <h3>{current.title}</h3>
            <p>{current.description}</p>
            {isVideo && <span className="video-badge">🎬 Vídeo</span>}
          </div>
        </div>
      </div>
    </>
  )
}