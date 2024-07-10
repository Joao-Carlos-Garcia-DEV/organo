import './CampoTexto.css';

const CampoTexto = (props) => {
    console.log(props.label);
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder='Digite o seu nome'></input>
        </div>
    )
}

export default CampoTexto