import Capa from './assets/card1.png'
import chat from './assets/chat.svg'
import code from './assets/code.svg'
import share from './assets/share.svg'
import icone from './assets/icone.svg'
import './styles.css'

export default function Card(){
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Capa} alt="imagem do post" />
            </div>
            <div className='card__conteudo'>
                <div className="conteudo__texto">
                    <h3>Titulo do post</h3>
                    <p>Resumo do post</p>
                </div>

                <div className="conteudo__rodape">
                    <ul>
                        <li>
                            <img src={code} alt="code icon" />
                            100
                        </li>
                        <li>
                            <img src={share} alt="share icon" />
                            20
                        </li>
                        <li>
                            <img src={chat} alt="chat icon" />
                            17
                        </li>
                    </ul>
                    <div className='rodape__usuario'>
                        <img src={icone} alt="img icone" />
                        @hugo
                    </div>
                </div>
            </div>
        </article>
    )
}