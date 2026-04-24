import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Vamos conversar sobre sua próxima decoração especial</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Fale Conosco</h3>
            <p>
              Estamos sempre prontos para criar algo especial para você.
              Entre em contato através do nosso WhatsApp.
            </p>
            <div className="contact-methods">
              <a
                href="https://wa.me/5541999256756"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <i className="fab fa-whatsapp" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
