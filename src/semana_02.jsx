
import React, { useState } from 'react';


function Semana02() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebarMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return(
        <>
        <div id='semana_02' className='numero_semana'>SEMANA 02</div>
        <div className='subtitulo_semana'><h2>HTML Y CSS -- BOTONES INTERACTIVOS</h2></div>
        
        <div className="reflexion_1">
            <h2 className="h2_10_1">LABORATORIO 2</h2>
            <div className="area_1">
                <h3>Definiciones:</h3>
                <p><strong>HTML (HyperText Markup Language):</strong> Es el lenguaje estándar para crear y estructurar páginas web. Utiliza etiquetas para definir elementos como párrafos, encabezados, enlaces e imágenes.</p>
                <p><strong>CSS (Cascading Style Sheets):</strong> Es el lenguaje utilizado para describir la presentación de documentos HTML. Permite aplicar estilos como colores, fuentes, espaciamiento y layout a los elementos de la página.</p>
                <p><strong>Iconos Font Awesome:</strong> Es una biblioteca de iconos vectoriales y herramientas que se pueden usar con HTML y CSS para agregar iconos fácilmente a una página web.</p>            
            </div>
            
            <div className="area_1">
                <h3>Reflexión Metacognitiva:</h3>
                <p>En este laboratorio, consolidé mis conocimientos básicos sobre HTML y CSS, y aprendí a integrar iconos de Font Awesome en mis proyectos. Empecé creando estructuras básicas de HTML y luego apliqué estilos con CSS para mejorar la apariencia visual. La integración de iconos de Font Awesome añadió un nivel extra de personalización y funcionalidad. Aprendí a través de la construcción de proyectos prácticos, lo que me permitió ver cómo los diferentes elementos se combinan para crear una página web completa y estilizada.</p>
                </div>
        </div>

        <div className="semana02_contenido">

            <h2>2.1 BOTONES BOOTSTRAP</h2>
            <button className="btn success">Success</button>
            <button className="btn info">Info</button>
            <button className="btn warning">Warning</button>
            <button className="btn danger">Danger</button>
            <button className="btn default">Default</button>
            
            <h2>2.2 BOTONES REDES SOCIALES</h2>
            <a href="#" className="fa_2 fa fa-facebook"></a>
            <a href="#" className="fa_2 fa fa-twitter"></a>
            <a href="#" className="fa_2 fa fa-google"></a>
            <a href="#" className="fa_2 fa fa-linkedin"></a>
            <a href="#" className="fa_2 fa fa-youtube"></a>
            <a href="#" className="fa_2 fa fa-instagram"></a>
            <a href="#" className="fa_2 fa fa-pinterest"></a>
            <a href="#" className="fa_2 fa fa-snapchat-ghost"></a>
            <a href="#" className="fa_2 fa fa-skype"></a>
            <a href="#" className="fa_2 fa fa-android"></a>

            <h2>2.3 LOADER</h2>
            <div className="loader"></div>

            <div className="contenido_responsivo">

                <div className="header_2">
                    <h1>2.4 Página Responsiva</h1>
                </div>
                
                    <div className="row">
                        <div className="col-3 col-s-3 menu_2">
                        <ul>
                            <li>CURSO 1</li>
                            <li>CURSO 2</li>
                            <li>CURSO 3</li>
                            <li>CURSO 4</li>
                        </ul>
                        </div>
                    
                        <div className="col-6 col-s-9">
                        <h1>CURSO 01</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium totam, sit esse omnis dolore ducimus perspiciatis quisquam consectetur placeat obcaecati tempora non asperiores dolores. Veritatis dolorem fuga maxime dolorum.</p>
                        </div>
                    
                        <div className="col-3 col-s-12">
                        <div className="aside">
                            <h2>Opcion 01</h2>
                            <p>Primera opcion del curso 1</p>
                            <h2>Opcion 02</h2>
                            <p>Segunda opcion del curso 1</p>
                            <h2>Opcion 03</h2>
                            <p>Tercera Opcion del curso 1</p>
                        </div>
                        </div>
                    </div>
            
                
                <div className="footer">
                    <p>Concluisones del curso 1</p>
                </div>
            </div>



            
    
        <h2>2.5 -- 2.6 SIDEBAR CONTAIDO Y CAMBIO DE MODO</h2>
        <div className={`sidebar ${isDarkMode ? 'dark-mode' : ''} ${isCollapsed ? 'collapsed' : 'expanded'}`} id="sidebar">
            <header className='header_sidebar'>
            <i class="fa fa-solid fa-gears"></i><span>Sidebar</span>
            </header>
            <div className="menu_2_5">
                <ul className="lista">
                    <li><i className="fa fa-home"></i><span>Home</span></li>
                    <li><i className="fa fa-tachometer"></i><span>Dashboard</span></li>
                    <li><i className="fa fa-table"></i><span>Orders</span></li>
                    <li><i className="fa fa-th-large"></i><span>Products</span></li>
                    <li><i className="fa fa-user-circle-o"></i><span>Customers</span></li>
                </ul>
            </div>
            <footer>
                <div className="linea"></div>
                <div className="space_footer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5OFwHtBIbc5s6RPBCnW9OU2Fk3H1L80FImNKasAJMKw&s" alt="foto" />
                    <span>mdo</span>
                    <i className="fa fa-caret-down flecha"></i>
                </div>
            </footer>
            <div className="botoncm">
                <button onClick={toggleSidebarMode}>Cambiar Modo</button>
            </div>
            <div className="botoncontraer">
                <button onClick={toggleSidebar}>Contraer</button>
            </div>
        </div>

        </div>
        
        </>
    )
}

export default Semana02