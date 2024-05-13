// import React, { useState, useEffect, useCallback } from 'react';

// import MoviesList from './components/MoviesList';
// import AddMovie from './components/AddMovie';
// import './App.css';

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // get------------
//   const fetchMoviesHandler = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('https://react-http-af8d1-default-rtdb.firebaseio.com/movies.json');
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const data = await response.json();

//       const loadeMovies = [];
      
//       for(const key in data)
//         {
//           loadeMovies.push({
//             id:key,
//             title: data[key].title,
//             openingText: data[key].openingText,
//             releaseDate:data[key].releaseDate,
//           });
//         }

//         setMovies(loadeMovies);

//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchMoviesHandler();
//   }, [fetchMoviesHandler]);


//   //post rquest ----------------
//  async function addMovieHandler(movie) {
//     // console.log(JSON.stringify(movie));
//   const response = await fetch('https://react-http-af8d1-default-rtdb.firebaseio.com/movies.json',{
//       method: 'POST',
//       body: JSON.stringify(movie),
//       headers:{
//         'content-Type':'application/json'
//       }
//     });

//     const data = await response.json();
//     // console.log(data);
//   }


// //delete -----------------------
//   async function deleteHandler(id){
//     const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/movies/${id}.json`,{
//       method :'DELETE'
//     })

//     console.log(`Movie with ID ${id} deleted successfully`);
//   }

//   // deleteHandler(NxkPCb6uvHZP4NxGAVo);
//   // Call the function with the provided ID

//   const buttonToDeleteHandle=(id)=>
//     {
//       console.log(id);
//       // const idToDelete = '-NxkPCb6uvHZP4NxGAVo';
//       deleteHandler(id);
//     }




//   let content = <p>Found no movies.</p>;

//   if (movies.length > 0) {
//     content = <MoviesList movies={movies} deleteHandler98={buttonToDeleteHandle}/>;
//   }

//   if (error) {
//     content = <p>{error}</p>;
//   }

//   if (isLoading) {
//     content = <p>Loading...</p>;
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <AddMovie onAddMovie={addMovieHandler} />
//       </section>
//       <section>
//         <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>{content}</section>
//     </React.Fragment>
//   );
// }

// export default App;


import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch movies from the database
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-af8d1-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // Function to add a new movie
  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-af8d1-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  // Function to delete a movie
  async function deleteHandler(id) {
    const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method: 'DELETE'
    })
    console.log(`Movie with ID ${id} deleted successfully`);
  }

  // Function to handle button click for deleting a movie
  const buttonToDeleteHandle = (id) => {
    deleteHandler(id);
  }

  // Define content based on loading state, error, or fetched movies
  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} deleteHandler={buttonToDeleteHandle} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
