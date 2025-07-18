import '@/styles/components/subHeader.scss'

/**
 * Affiche une section contenant une image et un titre optionnel.
 * La classe CSS de l’image peut être modifiée via la prop `brightness` pour ajuster la luminosité.
 *
 * @component
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.src - URL de l’image à afficher.
 * @param {string} props.alt - Texte alternatif pour l’image.
 * @param {string} [props.text] - Texte affiché dans un titre. Optionnel.
 * @param {string} [props.brightness] - Classe CSS pour ajuster la luminosité de l’image (light dark).
 * 
 * Appeler dans Home.jsx et About.jsx, scss dispo dans subHeader.scss
 */

export function SubHeader({src, alt, text, brightness}){
    return(
        
            <section className="sub-header-container">
                <img src={src} alt={alt} className={brightness}></img>
                {text && <h2>{text}</h2>}
            </section>
        
    )
}