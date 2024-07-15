import './CampoTexto.css';
import { useState } from 'react';

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    // let valor = ''

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        propssetValor(evento.target.value)
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto