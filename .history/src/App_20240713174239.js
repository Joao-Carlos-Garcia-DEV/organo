// import './App.css';

import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => setcoaoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;