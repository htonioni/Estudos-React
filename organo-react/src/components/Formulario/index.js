import "./Formulario.scss"
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import React from "react";

const Formulario = () => {
    const itensPickList = [
        "",
        "Pro Code",
        "Low Code",
        "No Code"
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log(time, userName, image, employeeType);
    }

    const [userName, setUserName] = React.useState("")
    const [employeeType, setEmployeeType] = React.useState("")
    const [image, setImage] = React.useState("")
    const [time, setTime] = React.useState("")

    return (
        <section className="formulario-box">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    labelName="Nome"
                    placeHolder="Digite seu nome"
                    required={true} 
                    valor={userName}
                    aoAlterado={valor => setUserName(valor)}
                />
                <CampoTexto
                    labelName="Cargo"
                    placeHolder="Digite seu cargo"
                    required={true}
                    valor={employeeType}
                    aoAlterado={valor => setEmployeeType(valor)}
                />
                <CampoTexto
                    labelName="Imagem"
                    placeHolder="Informe o endereço da imagem"
                    valor={image}
                    aoAlterado={(valor) => {setImage(valor)} }
                />
                <ListaSuspensa
                    labelName="Time"
                    itens={itensPickList}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;