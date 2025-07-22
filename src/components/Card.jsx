import { Link } from "react-router-dom";
import '@/styles/components/card.scss'


/**
 * Ce composant affiche une carte cliquable contenant une image et un texte.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.src - L'URL de l'image à afficher dans la carte.
 * @param {string} props.alt - Le texte alternatif pour l'image (accessibilité).
 * @param {string} props.text - Le texte affiché sur l'image.
 * @param {string} props.navLink - Le chemin de navigation vers lequel la carte redirige.
 * 
 * Appeler dans Home.jsx, scss dispo dans card.scss
 */

export function Card({src, alt, text, navLink}){
    return(
        <Link to={navLink}>   
             <article className="card">
                <img src={src} alt={alt}/>
                <h3>{text}</h3>
            </article>
        </Link>
    )
}