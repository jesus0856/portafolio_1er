import React from 'react';
import styled from 'styled-components';


// Definir componentes estilizados con styled-components
const Container = styled.div`
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  
  width: 100%;

  flex: 0 0 auto;

  @media (min-width: 576px) {
    flex: 0 0 auto;
    width: ${(props) => (props.sm ? `${(props.sm / 12) * 100}%` : '100%')};
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: ${(props) => (props.md ? `${(props.md / 12) * 100}%` : '100%')};
  }
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: ${(props) => (props.lg ? `${(props.lg / 12) * 100}%` : '100%')};
  }
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: ${(props) => (props.xl ? `${(props.xl / 12) * 100}%` : '100%')};
  }
  @media (min-width: 1400px) {
    flex: 0 0 auto;
    width: ${(props) => (props.xxl ? `${(props.xxl / 12) * 100}%` : '100%')};
  }
`;

// Componente principal
const Semana03 = () => {
  return (

    <>
    <div id="semana_03" className='numero_semana'>SEMANA 03</div>
    <div className='subtitulo_semana'><h2>Librerias de CSS para diseño responsive</h2></div>


        <div className="reflexion_1">
            <h2 className="h2_10_1">LABORATORIO 3</h2>
            <div className="area_1">
              <h3>Definiciones:</h3>
              <p><strong>Bootstrap CSS:</strong> Es un framework de CSS que facilita el desarrollo rápido de sitios web responsivos y móviles. Proporciona una serie de clases predefinidas para layout, componentes y utilidades.</p>
              <p><strong>Tailwind CSS:</strong> Es un framework de CSS de utilidad que permite construir diseños personalizados de manera rápida utilizando clases de utilidad directamente en el HTML.</p>
      
            </div>
            
            <div className="area_1">
                <h3>Reflexión Metacognitiva:</h3>
                <p>En este laboratorio, aprendí a usar Bootstrap y Tailwind CSS para crear interfaces web rápidas y responsivas. Bootstrap me permitió implementar rápidamente un diseño coherente utilizando sus componentes y sistema de grid. Por otro lado, Tailwind CSS me ofreció una mayor flexibilidad y control granular sobre los estilos mediante clases de utilidad. Aprendí comparando ambos frameworks en proyectos reales, lo que me ayudó a comprender cuándo y cómo utilizar cada uno dependiendo del contexto del proyecto.</p>
                </div>
        </div>

    <h2>3.1. RESPONSIVE CON BOOTSTRAP</h2>
    <Container>
      <Row>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo1">1</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo2">2</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo3">3</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo4">4</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo5">5</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo6">6</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo7">7</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo8">8</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo9">9</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo10">10</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo11">11</Col>
        <Col sm={4} md={3} lg={2} xl={1} xxl={1} className="fondo12">12</Col>
      </Row>
    </Container>

    <h2>3.2. RESPONSIVE CON TAILWIND</h2>
    <div className="container mx-auto text-center">
      <div className="flex flex-wrap">
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-red-500 p-4">1</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-blue-500 p-4">2</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-green-500 p-4">3</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-yellow-500 p-4">4</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-pink-500 p-4">5</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-purple-500 p-4">6</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-orange-500 p-4">7</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-indigo-500 p-4">8</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-gray-500 p-4">9</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-red-500 p-4">10</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-blue-500 p-4">11</div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-12 xxl:col-span-12 bg-green-500 p-4">12</div>
      </div>
    </div>

    <h2>3.3 RESPONSIVE CON CSS</h2>
    <div className="container_css">
      <div className="div_container_css">
        <div className="div_item item1" >1</div>
        <div className="div_item item2" >2</div>
        <div className="div_item item3 ">3</div>
        <div className="div_item item4 ">4</div>
        <div className="div_item item5 ">5</div>
        <div className="div_item item6 ">6</div>
        <div className="div_item item7 ">7</div>
        <div className="div_item item8 ">8</div>
        <div className="div_item item9">9</div>
        <div className="div_item item10 ">10</div>
        <div className="div_item item11 ">11</div>
        <div className="div_item item12 ">12</div>
      </div>
    </div>
    </>
  );
}

export default Semana03;
