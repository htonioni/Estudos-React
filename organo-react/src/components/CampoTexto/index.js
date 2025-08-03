import "./CampoTexto.scss"

const CampoTexto = ({ labelName, type, placeHolder, required = false, valor, aoAlterado }) => {

    return (
        <div className="campo-texto">
            <label>{labelName}</label>
            <input
                value={valor}
                required={required}
                type={type}
                placeholder={placeHolder}
                onChange={(e) => {aoAlterado(e.target.value)}}
            />
        </div>
    )
}

export default CampoTexto;