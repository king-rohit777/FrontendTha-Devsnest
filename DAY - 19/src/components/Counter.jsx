import React, {useState} from 'react';
import '../styles/Counter.css'

const  Counter = () => {
 
    const [counter1 , setCounter1] = useState(0);
   
    const increaseVal1 = () => { setCounter1(counter1 => counter1 + 1) }
    const decreaseVal1 = () => { setCounter1(counter1 => counter1 - 1) }
    
    return(
        <div className="container">
           <button onClick={increaseVal1}>Increase</button> <strong><div>{counter1}</div></strong><button onClick={decreaseVal1}>Decrease</button>
        </div>
    )
}

export default Counter