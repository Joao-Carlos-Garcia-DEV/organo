import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = () => {
        
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange{required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto