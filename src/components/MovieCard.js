import React from 'react'
import'./MovieCard.css';

const MovieCard =({el})=>{
    return(
        <div >
    <div >
  <div className="main-container">
    <div className="poster-container">
      <img src={el.ImageURL} className="poster" />
    </div>
    <div className="ticket-container">
      <div className="ticket__content">
        <h4 className="ticket__movie-title">{el.Title}</h4>
        <p className="ticket__movie-slogan">
          {el.Genre.Name}
        </p>
        <p className="ticket__current-price">
        
        
        </p>
        <p className="ticket__old-price"></p>
        <button className="ticket__buy-btn">details</button>
      </div>
    </div>
  </div>
 
</div>
</div>

    );

}
export default MovieCard;