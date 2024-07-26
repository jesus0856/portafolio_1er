
import React, { useState } from 'react';
import './App.css';

function Semana05() {
  const [texto1, setTexto1] = useState('Texto1');
  const [inputText, setInputText] = useState('');
  const [inputX, setInputX] = useState('');
  const [inputY, setInputY] = useState('');
  const [resultado, setResultado] = useState('Resultado:');

  const modificandoDom = () => {
    setTexto1(`Cambiando el DOM // ${new Date().toString()}`);
  };

  const cambiandoParrafo = (event) => {
    setInputText(event.target.value);
  };

  const calculateSum = () => {
    const x = parseFloat(inputX);
    const y = parseFloat(inputY);
    if (isNaN(x) || isNaN(y)) {
      setResultado('Resultado: ingrese numeros validos');
    } else {
      setResultado(`Resultado: ${x + y}`);
    }
  };


  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleRowClick = (student) => {
    setSelectedStudent(student);
  };


  const students = [
    { id: 1, lastName: 'González', firstName: 'María', address: 'Calle Primavera 123', phone: '123456789' },
    { id: 2, lastName: 'Martínez', firstName: 'Juan', address: 'Av. Siempre Viva 456', phone: '987654321' },
    { id: 3, lastName: 'Pérez', firstName: 'Ana', address: 'Calle del Sol 789', phone: '234567890' },
    { id: 4, lastName: 'Sánchez', firstName: 'Luis', address: 'Av. del Mar 321', phone: '876543210' },
    { id: 5, lastName: 'Ramírez', firstName: 'Carlos', address: 'Calle Luna 654', phone: '345678901' },
    { id: 6, lastName: 'Torres', firstName: 'Lucía', address: 'Av. del Parque 987', phone: '765432109' },
    { id: 7, lastName: 'Flores', firstName: 'Marta', address: 'Calle Verde 147', phone: '456789012' },
    { id: 8, lastName: 'Rojas', firstName: 'Pedro', address: 'Av. del Valle 258', phone: '654321098' },
    { id: 9, lastName: 'López', firstName: 'Sara', address: 'Calle Azul 369', phone: '567890123' },
    { id: 10, lastName: 'García', firstName: 'Fernando', address: 'Av. del Sol 471', phone: '765432198' },
  ];

  return (
    <>
    <div id="semana_05" className='numero_semana'>SEMANA 05</div>
    <div className='subtitulo_semana'><h2>MANIPULACION DEL DOM </h2></div>

        <div className="reflexion_1">
            <h2 className="h2_10_1">LABORATORIO 5</h2>
            <div className="area_1">
              <h3>Definición:</h3>
              <p><strong>DOM (Document Object Model) JavaScript:</strong> Es una interfaz de programación que permite a los scripts acceder y manipular el contenido, estructura y estilo de los documentos HTML y XML.</p>
              <p><strong>JavaScript:</strong> Es un lenguaje de programación interpretado que se utiliza para crear contenido web dinámico e interactivo. Permite manipular el DOM, manejar eventos, validar formularios, y mucho más.</p>

            </div>
            
            <div className="area_1">
              <h3>Reflexión Metacognitiva:</h3>
              <p>En este laboratorio, profundicé en la manipulación del DOM con JavaScript, aprendiendo a seleccionar, modificar y crear elementos en una página web. Utilicé métodos como getElementById, querySelector y createElement para interactuar con el DOM. Aprendí a través de ejercicios prácticos que involucraban la creación de interacciones dinámicas en la web, como añadir y eliminar elementos, y cambiar estilos en respuesta a eventos del usuario. Esta práctica me ayudó a entender mejor cómo los scripts pueden transformar una página estática en una aplicación web interactiva.</p>
            </div>
        </div>

    <div className="container_semana5">
      <h2 className="titulo">Ejercicio 01: Manipular el HTML con un click</h2>
      <p>{texto1}</p>
      <button type="button" onClick={modificandoDom} className="btn_5">Hacer Click!</button>

      <h2>Ejercicio 02: Manipular el HTML con AddEventListener</h2>
      <form>
        <label>Ingrese un texto:</label>
        <input type="text" placeholder="ingrese un texto" onChange={cambiandoParrafo} />
        <p>{inputText}</p>
      </form>

      <h2>Ejercicio 03: Manipular el HTML con AddEventListener</h2>
      <form>
        <label htmlFor="num1">X: </label>
        <input id="num1" type="text" value={inputX} onChange={(e) => setInputX(e.target.value)} placeholder="ingrese un primer numero" />
        <label htmlFor="num2">Y: </label>
        <input id="num2" type="text" value={inputY} onChange={(e) => setInputY(e.target.value)} placeholder="ingrese un segundo numero" />
        <button type="button" onClick={calculateSum} className="btn_5">Sumar</button>
        <p>{resultado}</p>
      </form>

      <h2>EJERCICO 04: MANIPULAR TABLA</h2>
      <div className="tabla_5">
      <h1>Lista de Estudiantes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Dirección</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} onClick={() => handleRowClick(student)}>
              <td>{student.id}</td>
              <td>{student.lastName}</td>
              <td>{student.firstName}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <h2>hacer click en cualquier campo para mostrar los detalles del estudiante</h2>
            {selectedStudent && (
            <div className="student-details">
                <h2>Detalles del Estudiante</h2>
                <p>ID: {selectedStudent.id}</p>
                <p>Apellidos: {selectedStudent.lastName}</p>
                <p>Nombres: {selectedStudent.firstName}</p>
                <p>Dirección: {selectedStudent.address}</p>
                <p>Teléfono: {selectedStudent.phone}</p>
            </div>
      )}
    </div>
    </div>
    </>
  );
}

export default Semana05;