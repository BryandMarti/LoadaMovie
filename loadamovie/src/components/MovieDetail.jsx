import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGIwMDIxMmJlM2RjMzk1MWQ3ZDM3ODBmMjkzZDAxYyIsIm5iZiI6MTcyMTY1MTQ5MC45MTEzNTksInN1YiI6IjY2Njc0MDcyZTM0MzdjYzVlNWJlN2JlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NXPp1WwflC-kbROWfOKzzhiCdXeC-w2wLn5htJOAPY'
        }
      };
      const response = await axios.get(url, options);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
