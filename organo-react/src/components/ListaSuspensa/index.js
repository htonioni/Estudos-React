import './ListaSuspensa.scss'

const ListaSuspensa = ({ labelName, itens }) => {
    return (
        <div className='lista-suspensa'>
            <label>{labelName}</label>
            <select>
                {itens.map(
                    item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
};

export default ListaSuspensa;