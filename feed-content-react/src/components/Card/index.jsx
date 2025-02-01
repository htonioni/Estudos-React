import chat from './assets/chat.svg'
import code from './assets/code.svg'
import share from './assets/share.svg'
import './styles.css'
import PropTypes from 'prop-types';

export default function Card({ imgUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario }) {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={imgUrl} alt="imagem do post" />
            </div>
            <div className='card__conteudo'>
                <div className="conteudo__texto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

                <div className="conteudo__rodape">
                    <ul>
                        <li>
                            <img src={code} alt="code icon" />
                            {linhasDeCodigo}
                        </li>
                        <li>
                            <img src={share} alt="share icon" />
                            {compartilhamentos}
                        </li>
                        <li>
                            <img src={chat} alt="chat icon" />
                            {comentarios}
                        </li>
                    </ul>
                    <div className='rodape__usuario'>
                        <img src={usuario.imagem} alt="img icone" />
                        @{usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    linhasDeCodigo: PropTypes.number.isRequired,
    compartilhamentos: PropTypes.number.isRequired,
    comentarios: PropTypes.number.isRequired,
    usuario: PropTypes.shape({
        imagem: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired
    }).isRequired
};
