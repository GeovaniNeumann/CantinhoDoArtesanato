import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
        <SocialSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
