import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MovieCard from './components/MovieCard.jsx'
import './styles.css'

const MOVIES = [
  {
    title: 'Inception',
    description: 'A mind‑bending sci‑fi thriller.',
    image: 'https://m.media-amazon.com/images/I/51xJ1A+7WkL._AC_.jpg',
    genre: 'Thriller',
    rating: 4.5,
  },
  {
    title: 'KGF Chapter 2',
    description: 'Epic action with mass dialogues.',
    image: 'https://m.media-amazon.com/images/I/81trPge3djL._AC_SL1500_.jpg',
    genre: 'Action',
    rating: 4.2,
  },
  {
    title: 'Squid Game',
    description: 'Deadly survival challenge.',
    image: 'https://m.media-amazon.com/images/I/91rf+sxG45L._AC_SL1500_.jpg',
    genre: 'Thriller',
    rating: 4.0,
  },
  {
    title: 'RRR',
    description: 'Friendship, freedom, fire & water.',
    image: 'https://m.media-amazon.com/images/I/91j6cUtUu7L._AC_SL1500_.jpg',
    genre: 'Action',
    rating: 4.6,
  },
  {
    title: 'Dangal',
    description: 'Gritty, emotional sports drama.',
    image: 'https://m.media-amazon.com/images/I/81uHn1kQyRL._AC_SL1500_.jpg',
    genre: 'Drama',
    rating: 4.4,
  },
  {
    title: 'Drishyam',
    description: 'A father goes to great lengths to protect his family.',
    image: 'https://m.media-amazon.com/images/I/81zFm1b3-0L._AC_SL1500_.jpg',
    genre: 'Thriller',
    rating: 4.3,
  },
]

export default function App(){
  const [genre, setGenre] = useState('All')

  const filtered = useMemo(() => {
    if(genre === 'All') return MOVIES
    return MOVIES.filter(m => m.genre === genre)
  }, [genre])

  const subheading = genre === 'All' ? 'Trending Now' : `Trending Now — ${genre}`

  return (
    <div>
      <Header selectedGenre={genre} onChange={setGenre} />
      <main className="container">
        <h2 style={{marginTop: '16px'}}>{subheading}</h2>
        <section className="grid">
          {filtered.map(movie => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              description={movie.description}
              image={movie.image}
              rating={movie.rating}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
