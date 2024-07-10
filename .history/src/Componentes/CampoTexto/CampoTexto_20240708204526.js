import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props}></input>
        </div>
    )
}

export default CampoTexto