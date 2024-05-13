import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  // console.log(props);
 const deleteHandler=() =>
  {
    // console.log(props.id);
    props.deleteHandler12(props.id);
    // console.log("click")
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button type='button' onClick={deleteHandler}>deleted</button>
    </li>
  );
};

export default Movie;
