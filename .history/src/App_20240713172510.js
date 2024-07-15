// import './App.css';

import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

function App() {

const [colaborador, setColaboradores] = useState([])

const aoNovoColaborador
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => setColaboradores()} />
    </div>
  );
}

export default App;