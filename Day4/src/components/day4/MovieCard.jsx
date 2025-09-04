import React, { useState } from "react";
export default function MovieCard({ movie }) {
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [reviewInput, setReviewInput] = useState("");
  const [savedReview, setSavedReview] = useState("");
  const [showMore, setShowMore] = useState(false);
  const inc = () => setRating((r) => Math.min(5, r + 1));
  const dec = () => setRating((r) => Math.max(0, r - 1));
  const handleSaveReview = () => { setSavedReview(reviewInput.trim()); setReviewInput(""); };
  const stars = "★★★★★";
  const starView = (
    <span className="stars" aria-label={`Current rating ${rating} out of 5`} title={`${rating}/5`}>
      <span className="stars-fill" style={{ width: `${(rating / 5) * 100}%` }}>{stars}</span>
      <span className="stars-base">{stars}</span>
    </span>
  );
  return (
    <article className="card">
      <img className="poster" src={movie.poster} alt={`${movie.title} poster`} />
      <div className="card-body">
        <h3 className="card-title">{movie.title} <span className="year">({movie.year})</span></h3>
        <p className="card-desc">{showMore ? movie.description : movie.description.slice(0, 90) + "..."}</p>
        <button className="btn ghost" onClick={() => setShowMore((v) => !v)} aria-expanded={showMore}>
          {showMore ? "Hide details" : "Show more"}
        </button>
        <hr />
        <div className="row space-between">
          <button className={`like-btn ${liked ? "liked" : ""}`} onClick={() => setLiked((v) => !v)} aria-pressed={liked}>
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>
          <div className="rating-row">
            <button className="btn small" onClick={dec} aria-label="Decrease rating">−</button>
            {starView}
            <button className="btn small" onClick={inc} aria-label="Increase rating">+</button>
          </div>
        </div>
        <hr />
        <label className="label" htmlFor={`review-${movie.id}`}>Your Review</label>
        <textarea id={`review-${movie.id}`} className="input" placeholder="Type what you felt about this movie..."
          value={reviewInput} onChange={(e) => setReviewInput(e.target.value)} rows={3}/>
        <button className="btn primary" onClick={handleSaveReview}>Save Review</button>
        {savedReview && (<div className="review"><p className="muted">Your saved review:</p><p>"{savedReview}"</p></div>)}
      </div>
    </article>
  );
}