import { NavLink } from 'react-router-dom';
import '@/styles/header.scss'
import kasaLogo from '@/assets/logoKasa.svg'

export function Header(){
    return(
        <header>
            <img src={kasaLogo} alt='logo de kasa'></img>
            <nav>
                <NavLink to='/'>Acceuil</NavLink>
                <NavLink to='/apropos'>A Propos</NavLink>
            </nav>
        </header>
    )
}