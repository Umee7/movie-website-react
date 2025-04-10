import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'

const API_BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
    try {

    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. please try again later.')
    }
  }

  return ( 
    <main>
      <div className='pattern' />

        <div className="wrapper">
          <header>
          <img src="./hero.png " alt="image" draggable="false" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
          
          <Search searchTerm={searchTerm}  setSearchTerm={setSearchTerm} />
          </header>
          
          <section className="all-movies">
            <h2>All Movies</h2>
  
          </section>
        </div>
    </main>
  )
}

export default App
