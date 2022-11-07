import React from 'react'
import MovieCard from './MovieCard';
import './card.css';
const MovieList =({data})=>{
    return(
        <div  className="hero-container">
        {data.map((el)=><MovieCard el={el} key={el._id}  />
)}
        </div>
    )
}
export default MovieList;