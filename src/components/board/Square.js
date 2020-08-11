import React, { useState } from 'react'

//images imports
import Miss from '../../assets/Miss.png'
import Hit from '../../assets/Hit.png'


//displays the content inside of the square 
const Square = ({ row, col, onClick }) => {
//keeps track if the button should display hit or miss image
  const [image, setImage] = useState('')
  
  //sends the coordinates to the parent component and sets the local state
  const clicker = () => {
    const display = onClick(`${row},${col}`);
    setImage(display);

  }
 
  return (
    <div className="col" onClick={clicker}>
      {image === 'hit' && <span> </span> ? <img src={Hit} /> :null}
      {image==='miss'&& <span> </span> ? <img src={Miss} /> : null}
      
    </div>
  );
}

export default Square
