import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section>
            <form>
                <h2
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />

            </form>
        </section>
    )
}
export default Formulario