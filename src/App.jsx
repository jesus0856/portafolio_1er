
import './App.css'
import React from 'react'
import Semana01 from "./semana_01"
import Semana02 from './semana_02';
import Semana03 from './semana_03';
import Semana05 from './semana_05';

function App() {
  return (
    <div>
      <BarraNavegacion/>
      <Portada/>
      <TablaContenido/>     
    </div>
  );
}

function BarraNavegacion() {

  return (
    
      <header className='header'>

        <h2>
          PORTAFOLIO
        </h2>
       
        <ul className='BNavegacion'>
          <li><a href="#portada">PORTADA</a></li>
          <li><a href="#bienvenido">INTRODUCCIÓN</a></li>
          <li><a href="#semana_01">CUADERNO PERSONAL</a></li>
        </ul>
      
      </header>
    
  )
}

function Portada() {
  return(    

      <section id='portada'>
        <div className='curso'>Desarrollo de Aplicaciones Web</div>
        <div className='portada'>
          <div className='cont_foto'>
            <img src="./Recursos/img_portada.jpg" alt="foto" />
          </div>
          <div className='cont_descripcion'>
            <div>
              <span>Pilloraza Rojas Jesús</span>
              <p id='bienvenido'>Bienvenidos al curso de Desarrollo de Aplicaciones Web: Aprenderás a crear aplicaciones funcionales y modernas. Donde se usara bootstrap, tailwind, html, css y react</p>
            </div>
          </div>
        </div>
      </section>
  )
  
}


function TablaContenido() {
  return(
    <>
    <Semana01/>
    <Semana02/>
    <Semana03/>
    <Semana05/>
    </>
  )
}


      

export default App
