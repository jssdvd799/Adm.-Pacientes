import React, { useState } from 'react';
import Formulario from '../Formulario'
import Navbar from '../Navbar' 


function App() {

  // Arreglo de citas

  const [citas, guardarCitas] = useState ([

  ]); 

  // Funcion que tome las citas actuales y agruegen la nuevas.

   const crearCita = cita => {
     guardarCitas([
       ...citas,
       cita
     ])

     // Reiniciar Formularios
     

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
              <Navbar />
            </div>
        </div>
      </div> 
   
    </>
  );
}

export default App;
