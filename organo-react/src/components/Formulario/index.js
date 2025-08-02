import "./Formulario.scss"
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = () => {
    return (
        <section className="formulario-box">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto labelName="Nome" placeHolder="Digite seu nome" />
                <CampoTexto labelName="Cargo" placeHolder="Digite seu cargo" />
                <CampoTexto labelName="Imagem" placeHolder="Informe o endereço da imagem" />
                <ListaSuspensa labelName="Time" itens={["Pro Code", "Low Code", "No Code" ]}/>
            </form>
        </section>
    )
}

export default Formulario;