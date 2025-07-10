import { NavLink } from "react-router-dom";
import '@/styles/Pages/notFound.scss'

export function NotFound(){
    return (
        <main>
            <div className="error-Container">
                <h1> 404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">Retourner sur la page d’accueil</NavLink>
            </div>
        </main>
    )
}