import { Link } from "react-router-dom";
import { useScollTo } from "@/hook/ScrollTo/useScrollTo";
import '@/styles/Pages/notFound.scss'

export function NotFound(){
    const scrollToTop = useScollTo();
    
    return (
        <>
            <div className="error-Container">
                <h2> 404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </>
    )
}