import { Link, NavLink } from 'react-router-dom';
import '@/styles/components/header.scss'
import kasaLogo from '@/assets/logoKasa.svg'
import { useEffect, useState } from 'react';

export function Header(){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => 
            {
                window.removeEventListener('resize', handleResize)
            }
    }, []);

    
    return(
        <header>
            <Link to='/'>
                <img src={kasaLogo} alt="Retour à la page d'accueil Kasa"></img>
            </Link>
            <nav aria-label="Menu principal">
                <NavLink to='/'>{screenWidth > 768  ? "Accueil" : "ACCUEIL"}</NavLink>
                <NavLink to='/apropos'>{screenWidth > 768  ? "A propos" : "A PROPOS"}</NavLink>
            </nav>
        </header>
    )
}