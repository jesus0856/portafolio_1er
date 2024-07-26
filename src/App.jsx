
import './App.css'
import React from 'react'
import Semana01 from "./semana_01"
import Semana02 from './semana_02';
import Semana03 from './semana_03';
import Semana05 from './semana_05';
import Semana10 from './semana_10';
import Semana11 from './semana_11';
import Semana12 from './semana_12';

function App() {
  return (
    <div>
      <BarraNavegacion/>
      <Portada/>
      <NavSemanas/>
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
          <li><a href="#nav_semanas">CUADERNO PERSONAL</a></li>
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
            <img className='img_portada' src="./recursos/img_portada.jpeg" alt="foto" />
          </div>
          <div className='cont_descripcion'>
            <div>
              <span>Pilloraza Rojas Jesús</span>
              <p id='bienvenido'>Bienvenidos al curso de Desarrollo de Aplicaciones Web: Aprenderás a crear aplicaciones funcionales y modernas. Donde se usara bootstrap, tailwind, html, css y react</p>
              <p>Para la segunda parte del curso se usará hooks de React, Next.js, TypeScript, JSP y Spring Boot </p>
            </div>
          </div>
        </div>
      </section>
  )
  
}

function NavSemanas() {
  return(
    
    <div id='nav_semanas' className='cont_navsemanas'>
      <ul className='NavSemanas'>
          <li><a href="#semana_01">Semana 01</a></li>
          <li><a href="#semana_02">Semana 02 </a></li>
          <li><a href="#semana_03">Semana 03</a></li>
          <li><a href="#semana_05">Semana 05</a></li>
          <li><a href="#semana_10">Semana 10</a></li>
          <li><a href="#semana_11">Semana 11</a></li>
          <li><a href="#semana_12">Semana 12</a></li>

        </ul>
    </div>
  )
}


function TablaContenido() {
  return(
    <>
    <Semana01/>
    <Semana02/>
    <Semana03/>
    <Semana05/>
    <Semana10/>
    <Semana11/>
    <Semana12/>
    </>
  )
}


      

export default App
