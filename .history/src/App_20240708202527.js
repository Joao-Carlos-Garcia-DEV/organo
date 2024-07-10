import './App.css';
import Banner from './Componentes/Banner/Banner';
import CampoTexto from './Componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto Label="Nome"/>
      <CampoTexto Label="Cargo"/>
      <CampoTexto Label="Imagem" />
      
      <CampoTexto label="Nome" />
      <CampoTexto label="Cargo" />
      <CampoTexto label="Imagem" />


    </div>
  );
}

export default App;
