function renderStars(rating){
  const stars = []
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75
  const totalFull = hasHalf ? full : Math.round(rating)
  for(let i=0;i<5;i++){
    if(i < totalFull){
      stars.push(<span key={i} className="star star-full">★</span>)
    }else if(hasHalf && i === full){
      stars.push(<span key={i} className="star star-half" aria-label="half">★</span>)
    }else{
      stars.push(<span key={i} className="star star-empty">☆</span>)
    }
  }
  return stars
}

export default function MovieCard({ title, description, image, rating }){
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <div className="stars" aria-label={`Rating ${rating} out of 5`}>{renderStars(rating ?? 0)}</div>
        <p>{description}</p>
      </div>
    </div>
  );
}
