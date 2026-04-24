import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">Conheça a história por trás de cada criação</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Juracema Neumann</h3>
            <p>
              Com anos de experiência em artesanato, Juracema Neumann dedica-se à criação de bonecas únicas, panos de prato personalizados  
              e peças decorativas especiais. Cada trabalho é feito com técnicas tradicionais e muito carinho,
              resultando em peças que tocam o coração e despertam sorrisos.
            </p>
            <p>
              No Cantinho do Artesanato, acreditamos que cada criação tem sua própria personalidade e história.
              Nossos artesanatos são perfeitos para decoração, presentes especiais ou para colecionadores
              que apreciam o trabalho manual de qualidade.
            </p>
            <div className="about-features">
              <div className="feature">
                <i className="fas fa-heart" />
                <span>Feito com Amor</span>
              </div>
              <div className="feature">
                <i className="fas fa-hand-holding-heart" />
                <span>Trabalho Artesanal</span>
              </div>
              <div className="feature">
                <i className="fas fa-star" />
                <span>Qualidade Única</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <Image
              src="https://i.ibb.co/Wbrpc91/Logotipo-Juracema-neumann.jpg"
              alt="Decoração de natal"
              width={600}
              height={400}
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
