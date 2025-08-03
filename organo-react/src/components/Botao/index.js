import './Botao.scss'

const Botao = ({ children }) => {
    return (
        <button className='botao'>
            {children}
        </button>
    )
}

export default Botao;