import './CampoTexto.css'
const CampoTexto = (props) => {
    console.log(props)
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder='Digite o seu nome'></input>
        </div>
    )
}

export default CampoTexto