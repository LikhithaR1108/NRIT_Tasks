import React from "react";
import MovieCard from "./MovieCard";
import "./styles-day4.css";
const MOVIES = [
  { id: 1, title: "Interstellar", year: 2014, poster: "https://m.media-amazon.com/images/I/71n58bK2m9L._AC_UF894,1000_QL80_.jpg", description: "A team travels through a wormhole in space in an attempt to ensure humanity's survival." },
  { id: 2, title: "3 Idiots", year: 2009, poster: "https://m.media-amazon.com/images/I/81o7g2K5nML._AC_UF1000,1000_QL80_.jpg", description: "Three friends navigate college life, pressure, and friendship in an engineering college." },
  { id: 3, title: "Baahubali: The Beginning", year: 2015, poster: "https://m.media-amazon.com/images/I/81d8zjYl0QS._AC_UF1000,1000_QL80_.jpg", description: "A young man learns about his royal lineage and rises to fulfill his destiny." },
];
export default function Day4MovieGallery() {
  return (
    <section id="day4-movie-picks" className="day4-wrap">
      <h2 className="section-title">Day 4 — Movie Picks Gallery</h2>
      <p className="muted small">useState • onClick • onChange • Controlled inputs • Conditional rendering</p>
      <div className="grid">
        {MOVIES.map((m) => (<MovieCard key={m.id} movie={m} />))}
      </div>
    </section>
  );
}