import { NavLink } from "react-router-dom";
import '@/styles/components/card.scss'

export function Card({src, alt, text, navLink}){
    return(
        <NavLink to={navLink}>   
            <div className="card">
                <img src={src} alt={alt}/>
                <p>{text}</p>
            </div>
        </NavLink>
    )
}