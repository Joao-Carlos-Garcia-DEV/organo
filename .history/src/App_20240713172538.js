// import './App.css';

import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

function App() {

const [colaborador, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador => {
  
})
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => setColaboradores()} />
    </div>
  );
}

export default App;