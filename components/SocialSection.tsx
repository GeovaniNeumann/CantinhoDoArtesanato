export default function SocialSection() {
  return (
    <section className="social-section">
      <div className="container">
        <h3>Siga-nos nas Redes Sociais</h3>
        <div className="social-links">
          <a
            href="https://www.instagram.com/juracemaneumann/"
            className="social-link instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100070904088108"
            className="social-link facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  )
}
