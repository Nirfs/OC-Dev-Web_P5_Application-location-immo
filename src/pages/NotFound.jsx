import { NavLink } from "react-router-dom";
import '@/styles/Pages/notFound.scss'

export function NotFound(){
    return (
        <>
            <div className="error-Container">
                <h2> 404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">Retourner sur la page d’accueil</NavLink>
            </div>
        </>
    )
}