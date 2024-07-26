function Semana10() {


    return(
        <>
        <section className="semana10">
            <div id="semana_10" className='numero_semana'>SEMANA 10</div>
            <div className="cont_10_1">
                
                <div className='cont_foto_10'>
                    <h3>Ejercicio práctico 10.1</h3>
                    <img className="img_10_1" src="../ejercicio 10_1.png" alt="foto" />

                    <h3>Ejercicio práctico 10.2</h3>
                    <div className="cont_imgs_10_2">
                    <img className="img_10_2" src="./public/ejercicio 10_2_1.png" alt="foto" />
                    <img className="img_10_2" src="./public/ejercicio 10_2_2.png" alt="foto" />   
                    <img className="img_10_2" src="./public/ejercicio 10_2_3.png" alt="foto" /> 
                    </div>

                    <h3>Ejercicio práctico 10.3</h3>
                    <img className="img_10_3" src="./public/ejercicio 10_3.png" alt="foto" />

                </div>

                <div className="reflexion">
                    <h2 className="h2_10_1">LABORATORIO 10</h2>
                    <div className="area_10">
                        <h3>Definiciones:</h3>
                        <p><strong>. useState:</strong> Es un hook de React que permite añadir estado a los componentes funcionales. Devuelve un array con dos elementos: el estado actual y una función para actualizarlo.</p>
                        <p><strong>. useEffect:</strong> Es un hook que permite ejecutar efectos secundarios en los componentes funcionales. Puede ser utilizado para operaciones como la obtención de datos, suscripción a servicios o directamente manipular el DOM.</p>
                        <p><strong>. useContext:</strong> Este hook permite consumir un contexto React dentro de un componente funcional. Simplifica el acceso a valores globales sin necesidad de pasar props manualmente por cada nivel del componente.</p>
                        <p><strong>. useReducer:</strong> Es una alternativa a useState para manejar estados más complejos. Se usa para implementar lógica de estado en componentes de manera similar a Redux.</p>
                    </div>
                    <div className="area_10_1">
                        <h3>Reflexión Metacognitiva:</h3>
                        <p>En este laboratorio, aprendí sobre la gestión del estado y efectos secundarios en React utilizando hooks como useState, useEffect, useContext y useReducer. Empecé con useState para comprender cómo manejar el estado local en un componente funcional. Luego, exploré useEffect para gestionar efectos secundarios, como llamadas a APIs. Posteriormente, profundicé en useContext para facilitar el acceso a datos en toda la aplicación sin pasar props. Finalmente, useReducer me ayudó a gestionar estados más complejos de forma estructurada.</p>
                        <p>Aprendí estos conceptos a través de ejemplos prácticos y ejercicios de codificación, donde implementé diferentes escenarios para cada hook. Este enfoque práctico me permitió consolidar el conocimiento al enfrentarme a problemas reales y resolverlos utilizando estos hooks.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Semana10

