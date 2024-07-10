import './CampoTexto.css'
const CaompoTexto = (props.) => {
    console.log(props);
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder='Digite o seu nome'></input>
        </div>
    )
}

export default CampoTexto