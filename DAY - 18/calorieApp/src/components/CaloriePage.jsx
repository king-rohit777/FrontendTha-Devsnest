import React, {useState} from 'react';
import '../styles/CaloriePage.css';
import CalorieBox from './CalorieBox';

const calorieArr =[
    {
        id : 0,
        title: "Pizza",
        calories: 100
    },
    {
        id : 1,
        title: "Burger",
        calories: 33
    },
    {
        id : 2,
        title: "Hot dog",
        calories: 48
    },
    {
        id : 3,
        title: "Pasta",
        calories: 53
    },
    {
        id : 4,
        title: "Chicken",
        calories: 550
    },
    {
        id : 5,
        title: "Sandwich",
        calories: 29
    }
    
];


function CaloriePage (){
    const [state , setState] = useState(calorieArr)
    
return(
    <div className="page">
        <div className="container">
            
            {
                state.length > 0 ? state.map((calorieArr,id) => {
                return <CalorieBox state={state} setState={setState} calorieArr={calorieArr} key={id} />}
                ): <strong><p> Item List is Empty</p></strong>
            }
        </div>
    </div>
)}

export default CaloriePage