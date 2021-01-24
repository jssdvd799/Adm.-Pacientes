import React, { useState } from 'react';
import Formulario from '../Formulario'
import Navbar from '../Navbar' 
import Citas from '../Citas'

function App() {

  // Arreglo de citas

  const [citas, guardarCitas] = useState ([
  ]); 

  // Funcion que tome las citas actuales y agruegen la nuevas.

  const crearCita = cita => {
     guardarCitas([
       ...citas,
       cita
     ]);
  } 

  // Funcion eliminar citas

  const eliminarCita = id => {
    const nuevaCitas = citas.filter ( cita => cita.id !== id );
    guardarCitas(nuevaCitas)
  }

  return (
    <>
    
    <h2>Practicando JavaScript</h2>

    <h1>Administrador de pacientes</h1>
    
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            crearCita={crearCita}
            />
           </div>
          <div className="one-half column">
            <h2>Administrar Citas</h2>
              {citas.map(cita =>
                <Citas 
                key={cita.key}
                cita={cita}
                eliminarCita={eliminarCita}
                />
                )}
              <Navbar />
            </div>
        </div>
      </div> 
   
    </>
  );
}

export default App;
