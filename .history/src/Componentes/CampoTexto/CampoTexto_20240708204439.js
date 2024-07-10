import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder='Digite o  nome'></input>
        </div>
    )
}

export default CampoTexto