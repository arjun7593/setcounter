import React, { useState } from 'react'
import "./Counter.css"

const Counter=()=>{
    const [count,setCount]=useState(0);

    const increment=()=> setCount(count + 1);
    const decrement = () => setCount(count - 1);



  return (
    <div className="counter-container">
      <h2 className="counter-title">Counter:{count}</h2>
      <div className="button-container">
        <button onClick={increment} className="counter-button">
          Increment
        </button>
        <button onClick={decrement} className="counter-button">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter