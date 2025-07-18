import '@/styles/components/starsRating.scss'
/**
 * Composant StarsRating
 *
 * Affiche une note sous forme d’étoiles remplies et vides.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string|number} props.rating - La note à afficher.
 * @param {string|number} props.id - Identifiant unique utilisé pour la clé des étoiles.
 * Appeler dans Accomodation.jsx, scss dispo dans starsRating.scss
 */

export function StarsRating({ rating,id }) {
  const filled = parseInt(rating);
  const total = 5;

  return (
    <div className="stars">
      {[...Array(total)].map((_, index) => (
        <i
          key={index + id + rating}
          className={`fa-star ${index < filled ? 'fas' : 'fas empty'}`}
        ></i>
      ))}
    </div>
  );
}