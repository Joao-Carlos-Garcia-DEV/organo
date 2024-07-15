// import './App.css';

import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '',
      corSecundaria: '',
    },
    {
      nome: 'Data Science',
      corPrimaria: '',
      corSecundaria: '',
    },
    {
      nome: 'Devops',
      corPrimaria: '',
      corSecundaria: '',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '',
      corSecundaria: '',
    },
    {
      nome: 'Mobile',
      corPrimaria: '',
      corSecundaria: '',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '',
      corSecundaria: '',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Frontend" />
    </div>
  );
}

export default App;