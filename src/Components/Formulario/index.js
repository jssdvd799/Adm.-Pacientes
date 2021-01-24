import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'

  const Formulario = ({crearCita}) => {
  uuidv4();
  //Crear el state de Citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propetario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, actualizarError] = useState (false)

  // Funcion que se usa cuando el usuario escribe un input

  const ActualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores

  const {mascota, propetario, fecha, hora, sintomas} = cita;

  // Cuando el usuario presiona el botón "agregar cita"

  const submitCita = e => {
    e.preventDefault();
    
  // Validar datos 

  if (mascota.trim() === '' || propetario.trim() === ''|| fecha.trim() === ''|| hora.trim() === '' || sintomas.trim() === '' ) {
    actualizarError(true);
    return;
  }

  // Eliminar el mensaje previo
  actualizarError(false);

  // Asignar una ID
 
   const { v4: uuidv4 } = require('uuid');
   cita.id= uuidv4();

  // Crear Cita

  crearCita(cita);
  

};

  return (
    <>
      <h2>Crear cita</h2>

      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

      <form onSubmit={submitCita}>
        <label>Nombre de la Mascota:</label>
        <input
          className="u-full-width"
          type="text"
          name="mascota"
          placeholder="Mascota"
          onChange={ActualizarState}
          value={mascota}
        />

        <label>Nombre Dueño:</label>
        <input
          className="u-full-width"
          type="text"
          name="propetario"
          placeholder="Dueño de la mascota"
          onChange={ActualizarState}
          value={propetario}
        />

        <label>Fecha:</label>
        <input
          className="u-full-width"
          type="date"
          name="fecha"
          onChange={ActualizarState}
          value={fecha}
        />

        <label>Hora:</label>
        <input
          className="u-full-width"
          type="time"
          name="hora"
          onChange={ActualizarState}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={ActualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
