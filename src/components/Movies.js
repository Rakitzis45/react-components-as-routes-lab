import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index)=>
          <div key={index}> {movie.title} <ul>
            <li>Run time:{movie.time}</li>
            <li>Genres <ul> {movie.genres.map((genre, index)=> <li key={index}>{genre}</li>)}</ul></li>
            
            </ul></div>
        )}
    </div>
  );
};

export default Movies;
