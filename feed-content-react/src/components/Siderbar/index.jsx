import './styles.css'
import logo from "./assets/Logo.svg";
import feed from "./assets/feed.svg";
import info from "./assets/info.svg";
import logout from "./assets/logout.svg";
import account from "./assets/account_circle.svg"

function Sidebar() {
    return (
        <aside>
            <img src={logo} alt="logo CodeConnect" />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href="#" className='item__link-publicacao'>Publicar</a>
                    </li>
                    <li>
                        <a href="#" className='item__link item__link--ativo'>
                            <img src={feed} alt=""/>
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={account} alt="" />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={info} alt="" />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={logout} alt="" />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
};

export default Sidebar;