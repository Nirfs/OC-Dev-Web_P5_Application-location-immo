/**
 * Affiche le prénom et le nom d’un hôte sur deux lignes.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.logement - L'objet logement contenant les données de l'hôte.
 * @param {Object} props.logement.host - L'objet représentant l'hôte.
 * @param {string} props.logement.host.name - Le nom de l’hôte
 *
 */

export function NameSplit({logement}) {
    const name =  logement.host.name.split(" ")
    const firstName = name[0]
    const lastName = name.slice(1).join(" ")
    return(
        <p>
              {firstName}<br />
              {lastName}
        </p>
    )
}