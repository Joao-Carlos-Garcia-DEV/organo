import './CampoTexto.css'
const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props}</label>
            <input placeholder='Digite o seu nome'></input>
        </div>
    )
}

export default CampoTexto