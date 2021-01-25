import React, { useState, useEffect } from 'react';

import Formulario from '../Formulario'
import Citas from '../Citas'

function App() {

  // Citas en el LocalStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }


  // Arreglo de citas
  const [citas, guardarCitas] = useState ([citasIniciales
  ]); 

  // useEffect Realizar ciertas operaciones cuando el State cambia

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
}, [citas] );


  // Funcion que tome las citas actuales y agruegen la nuevas.

  const crearCita = cita => {
     guardarCitas([
       ...citas,
       cita
     ]);
  } 

  // Funcion que elimina una cita por su id

  const eliminarCita = id => {
    const nuevaCitas = citas.filter ( cita => cita.id !== id );
    guardarCitas(nuevaCitas)
  }

 // Mensaje Condicional

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
    <h1>Administrador de pascientes</h1>
    
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
               {citas.map(cita => (
                <Citas 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                />
                ))}
          </div>
        </div>
      </div> 
    </>
  );
}

 

export default App;
