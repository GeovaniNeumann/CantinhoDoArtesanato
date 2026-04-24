import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Image
              src="https://i.ibb.co/Wbrpc91/Logotipo-Juracema-neumann.jpg"
              alt="Juracema Neumann Logo"
              width={80}
              height={80}
              className="footer-logo"
            />
            <p>Cantinho das Bonecas - Artesanatos e decoração únicos, feitos com amor e carinho.</p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              {[
                { href: '#home', label: 'Início' },
                { href: '#about', label: 'Sobre' },
                { href: '#gallery', label: 'Galeria' },
                { href: '#contact', label: 'Contato' },
              ].map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <p><i className="fab fa-whatsapp" /> (41) 99925-6756</p>
            <p><i className="fab fa-instagram" /> @juracemaneumann</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Cantinho das Bonecas - Juracema Neumann. Todos os direitos reservados.
          </p>
          <p className="dev-credits">
            Desenvolvido por{' '}
            <a href="https://portifolio-geovani.vercel.app/" target="_blank" rel="noopener noreferrer" className="dev-link">
              Geovani Neumann
            </a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
