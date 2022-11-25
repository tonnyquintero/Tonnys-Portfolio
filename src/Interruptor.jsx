import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import encendido from '../src/img/lightswitch-on.png';
import apagado from '../src/img/lightswitch-off.png';
import espFlag from './assets/espFlag.png';
import enFlag from './assets/enFlag.png';
import { useTranslation } from 'react-i18next';


const Interruptor = () => {

  const [t, i18n] = useTranslation("globals");


    const { darkMode, ToggleDarkMode } = useContext(ThemeContext)

    const handleClick = () => {
        ToggleDarkMode();
    }

  return (
    <div className='interruptor'>
        <img src={darkMode ? encendido : apagado} alt='Interruptor' 
        onClick={handleClick} className='switch'>
        </img>
        <h2 className={darkMode ? 'darkH2' : 'clearH2'}> ⬅️     
            
             {darkMode ? '   Dark Mode 🔦' : '   Ligth Mode 💡'}
        </h2>

        <div className="containerFlag">
      <button className='btn-bg' onClick={() => i18n.changeLanguage("es")}>
          <img className='btn-flag' src={espFlag} alt="Español" />
        </button>
        <button className='btn-bg' onClick={() => i18n.changeLanguage("en")}>
          <img className='btn-flag'  src={enFlag} alt="ingles" />
        </button>
      </div>
    </div>
  )
}

export default Interruptor