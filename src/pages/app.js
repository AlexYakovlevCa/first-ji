import { Footer } from '../cmps/footer-cmp'
import { Header } from '../cmps/header-cmp'
import { Hero } from '../cmps/hero-cmp.jsx'
import { About } from '../cmps/about-cmp.jsx'
import { ReviewCards } from '../cmps/review-cards-cmp.jsx'
import { ContactUs } from '../cmps/contact-us-cmp.jsx'


export const App = () => {
  return <div className="app">
    <Header />
    <main className='main-contianer'>
      <Hero />
      <About />
      <ReviewCards/>
      <ContactUs />
    </main>
    <Footer />
  </div>
}