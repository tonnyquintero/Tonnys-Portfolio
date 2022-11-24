/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { ThemeContext } from '../src/context/ThemeContext'
import Interruptor from './Interruptor';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';




const App = () => {


  const { darkMode } = useContext(ThemeContext)


  return (
    <>
      <div className={darkMode ? 'containerDark' : 'containerLight'}>
        <Interruptor />
      
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
      </div>
    </>
  )
}

export default App