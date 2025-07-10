import { NavLink } from "react-router-dom";
import '@/styles/components/card.scss'

export function Card({src, alt, text, navLink}){
    return(
        <NavLink to={navLink}>   
             <article className="card">
                <img src={src} alt={alt}/>
                <h3>{text}</h3>
            </article>
        </NavLink>
    )
}