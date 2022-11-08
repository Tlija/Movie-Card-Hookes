import React from 'react'
import Rating from "@mui/material/Rating";


function FilterMovie({handleFilterbn,handleFilterrate}) {
  return (
    <div>
    <input type="text" name="" id="" onChange={(e)=>handleFilterbn(e.target.value)} /> 
    <Rating
        name="simple-controlled"
        onChange={(event, newValue) => {
          handleFilterrate(newValue);
        }}
      />
    </div>
  )
}

export default FilterMovie