import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGIwMDIxMmJlM2RjMzk1MWQ3ZDM3ODBmMjkzZDAxYyIsIm5iZiI6MTcyMTY1MTQ5MC45MTEzNTksInN1YiI6IjY2Njc0MDcyZTM0MzdjYzVlNWJlN2JlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NXPp1WwflC-kbROWfOKzzhiCdXeC-w2wLn5htJOAPY'
      }
    };
    const response = await axios.get(url, options);
    setResults(response.data.results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
