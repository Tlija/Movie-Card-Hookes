import React, { useState } from 'react';
import './App.css';
import Add from './components/Add';
import data from './data';
import MovieListe from './components/MovieList';
import FilterMovie from './components/FilterMovie';
const App=()=> {
  const [filterbn, setFilterbn] = useState("");
  const [value, setValue] = useState(0);
  const [movies, setMovies]=useState(data)
  const handelAdd =(filmjdid)=>setMovies([...movies,{...filmjdid,_id:movies.length}])
  const handleFilterbn = (value) => {
    setFilterbn(value);
  };
  const handleFilterrate = (value) => {
    setValue(value);
  };
  return (
    <div className="App">
    
      <h1>TopMovie</h1>
      <FilterMovie handleFilterbn={handleFilterbn} handleFilterrate={handleFilterrate}/>
      <Add handelAdd={handelAdd}/>
      <MovieListe 
      data={movies.filter(
        (el)=>
         el.Title.toLowerCase().includes(filterbn.trim().toLowerCase()) && el.Rating >= value
      )}/>

    </div>
  );
}

export default App;
