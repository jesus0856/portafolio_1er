import img_12_1_1 from '../recursos/ejercicio 12_1_1.png'
import img_12_1_2 from '../recursos/ejercicio 12_1_2.png'
import img_12_2_1 from '../recursos/ejercicio 12_2_1.png'
import img_12_2_2 from '../recursos/ejercicio 12_2_2.png'
import img_12_3 from '../recursos/ejercicio 12_3.png'


function Semana12 () {
    return(
        <>
            <section className="semana12">
                <div id="semana_12" className='numero_semana'>SEMANA 12</div>
                <div className="cont_12">
                    
                    <div className='cont_foto_10'>
                        
                        <h3>Ejercicio práctico 12.1 metodo GET</h3>
                        <img className="img_12_1_1" src={img_12_1_1} alt="foto" />
                        <img className="img_12_1_1" src={img_12_1_2} alt="foto" />

                        <h3>Ejercicio práctico 12.2 metodo POST</h3>
                        <img className="img_12_1_1" src={img_12_2_1} alt="foto" />
                        <img className="img_12_1_1" src={img_12_2_2} alt="foto" />

                        <h3>Ejercicio práctico 12.3</h3>
                        <img className="img_12_1_1" src={img_12_3} alt="foto" />


                    </div>

                        <div className="reflexion">
                            <h2 className="h2_10_1">LABORATORIO 12</h2>
                            <div className="area_10">
                            <h3>Definiciones:</h3>
                            <p><strong>JSP (JavaServer Pages):</strong> Es una tecnología Java que permite crear contenido web dinámico utilizando HTML, XML y Java.</p>
                            <p><strong>Scriptlet:</strong> Código Java embebido dentro de un archivo JSP. Se utiliza para realizar operaciones lógicas y de control de flujo.</p>
                            <p><strong>Declaraciones del JSP:</strong> Son fragmentos de código que definen métodos o variables que se comparten en toda la página JSP.</p>
                            <p><strong>JSP Expression:</strong> Permite insertar valores Java directamente en la salida HTML.</p>
                        </div>
                        <div className="area_10_1">
                            <h3>Reflexión Metacognitiva:</h3>
                            <p>En este laboratorio, aprendí sobre JSP y sus componentes clave, como scriptlets, declaraciones y expresiones JSP. Comprendí cómo JSP permite la creación de contenido web dinámico mediante la integración de Java y HTML. Empecé utilizando scriptlets para insertar lógica Java en mis páginas JSP, luego aprendí a definir métodos y variables globales con declaraciones JSP, y finalmente utilicé expresiones JSP para mostrar valores dinámicos en HTML.</p>
                            <p>El aprendizaje fue práctico, creando y depurando aplicaciones web que integraban estas características de JSP. Este enfoque práctico, junto con la lectura de la documentación y ejemplos, me permitió entender cómo y cuándo utilizar cada componente de JSP para desarrollar aplicaciones web dinámicas de manera eficiente.</p>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Semana12