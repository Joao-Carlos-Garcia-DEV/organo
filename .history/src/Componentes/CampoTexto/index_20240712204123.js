import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.oplaceholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto