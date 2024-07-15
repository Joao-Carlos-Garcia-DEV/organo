import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    let 
    const aoDigitado = (evento) => {
        
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto