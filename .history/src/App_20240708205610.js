import './App.css';
import Banner from './Componentes/Banner/Banner';
import CampoTexto from './Componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="seu nome"/>
      <CampoTexto label="Cargo" placeholder="seu nome" />
      <CampoTexto label="Imagem" placeholder="o endere" />


    </div>
  );
}

export default App;
