import React from 'react';

const Cita = ({cita, eliminarCita}) => 
     ( 
    <>
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propetario: <span>{cita.propetario}</span></p>
            <p>Hora: <span></span>{cita.hora}</p>
            <p>Fecha: <span></span>{cita.fecha}</p>
            <p>Sintomas: <span></span>{cita.sintomas}</p>
            <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita (cita.id) }
            >Eliminar &times;</button>
        </div>
    </>
    );

 
export default Cita;