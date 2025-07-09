export function StarsRating({ rating,id }) {
  const filled = parseInt(rating);
  const total = 5;

  return (
    <div className="stars">
      {[...Array(total)].map((_, i) => (
        <i
          key={i + id + rating}
          className={`fa-star ${i < filled ? 'fas' : 'fas empty'}`}
        ></i>
      ))}
    </div>
  );
}