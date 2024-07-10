import './App.css';
import Banner from './Componentes/Banner/Banner';
import CampoTexto from './Componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" />
      <CampoTexto label="Cargo" />
      <CampoTexto label="Imagem" />


    </div>
  );
}

export default App;
