import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {

  // console.log(props);
  const deleteButton=(id) =>
    {
      // console.log("click",id)
      props.deleteHandler98(id);
    }

  // props.deleteButton(id);

  
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          deleteHandler12={deleteButton}
        />
      ))}
    </ul>
  );
};

export default MovieList;
