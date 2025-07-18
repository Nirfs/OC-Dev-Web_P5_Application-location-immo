/**
 * Affiche une liste de tags associés à un logement.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.logement - Objet contenant les données du logement.
 * @param {string[]} props.logement.tags - Tableau de chaînes représentant les tags.
* Appeler dans accomodation.jsx, style dispo dans tags.scss.
*/
import '@/styles/components/tags.scss'

export function Tags({logement}){
    return(
        <div className="tag-container">
            {logement.tags.map((tag, index) => (
              <p className="tag" key={`${index}-${tag}`}>
                {tag}
              </p>
            ))}
        </div>
    )
}
