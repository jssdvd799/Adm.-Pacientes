import React from 'react';
import Formulario from '../Formulario'
import Navbar from '../Navbar'

function App() {
  return (
    <>
   
    <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
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
