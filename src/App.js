import React, { useState } from 'react';
import './App.css';
import Add from './components/Add';
import data from './data';
import MovieListe from './components/MovieList';
const App=()=> {

  const [movies, setMovies]=useState(data)
  const handelAdd =(filmjdid)=>setMovies([...movies,{...filmjdid,_id:movies.length}])
  return (
    <div className="App">
    
      <h1>Hello Hooks</h1>
      <Add handelAdd={handelAdd}/>
      <MovieListe data={movies}/>

    </div>
  );
}

export default App;
