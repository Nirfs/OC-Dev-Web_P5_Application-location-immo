import { Link, NavLink } from 'react-router-dom';
import { useScreenWidth } from "@/hook/ScreenWitdh/useScreenWidth.js"
import '@/styles/components/header.scss'
import kasaLogo from '@/assets/logoKasa.svg'

/**
*style disponible dans header.scss
*/

export function Header(){
    const screenWidth = useScreenWidth()
    const screenSizeBreak = 1024

    return(
        <header>
            <h1>
                <Link to='/'>
                    <img src={kasaLogo} alt="Retour à la page d'accueil Kasa"></img>
                </Link>
            </h1>
            <nav aria-label="Menu principal">
                <NavLink to='/'>{screenWidth > screenSizeBreak  ? "Accueil" : "ACCUEIL"}</NavLink>
                <NavLink to='/apropos'>{screenWidth > screenSizeBreak  ? "A propos" : "A PROPOS"}</NavLink>
            </nav>
        </header>
    )
}