import "./CampoTexto.scss"

const CampoTexto = ({ labelName, type, placeHolder }) => {
    return (
        <div className="campo-texto">
            <label>{labelName}</label>
            <input type={type} placeholder={placeHolder} />
        </div>
    )
}

export default CampoTexto;