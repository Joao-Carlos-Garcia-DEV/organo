import './Colaborador.css'

const Colaborador = () => {
    return (<div className='colaborador'>
        <div className='cabecalho'>
            <img src='https://github.com/viniciosneves.png' alt='' />
        </div>
        <div className='rodape'>
            <h4>props.nome Neves</h4>
            <h5>props.cargo</h5>
        </div>
    </div>)
}

export default Colaborador