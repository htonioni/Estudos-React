import './ListaSuspensa.scss'

const ListaSuspensa = ({ labelName, itens, valor, aoAlterado }) => {

    return (
        <div className='lista-suspensa'>
            <label>{labelName}</label>
            <select value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                {itens.map(
                    item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
};

export default ListaSuspensa;