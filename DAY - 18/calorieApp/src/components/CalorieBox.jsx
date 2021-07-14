import React  from 'react';
import '../styles/CalorieBox.css';


function CalorieBox({state,setState,calorieArr})
{
    let handleClick= () =>{
        // console.log("deleting clicked");
        // console.log(state);
        let newState = state.filter((el) => el.id !== calorieArr.id )
        setState(newState);
    }

return(
    <div className="box">
        <div><strong>{calorieArr.title}</strong></div>
        <div>You have consumed <strong>{calorieArr.calories}</strong> calories today</div>
        <button onClick ={handleClick}>Delete</button>
    </div>
);}

export default CalorieBox;