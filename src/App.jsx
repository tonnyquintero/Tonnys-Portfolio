import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import espFlag from './assets/espFlag.png';
import enFlag from './assets/enFlag.png';
import { useTranslation } from 'react-i18next';



const App = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <>

      <div className="containerFlag">
      <button className='btn-bg' onClick={() => i18n.changeLanguage("es")}>
          <img className='btn-flag' src={espFlag} alt="Español" />
        </button>
        <button className='btn-bg' onClick={() => i18n.changeLanguage("en")}>
          <img className='btn-flag'  src={enFlag} alt="ingles" />
        </button>
      </div>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
    </>
  )
}

export default App