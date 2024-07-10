import './CampoTexto.css'
const CampoTexto = (props.label) => {
    console.log(props)
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder='Digite o seu nome'></input>
        </div>
    )
}

export default CampoTexto