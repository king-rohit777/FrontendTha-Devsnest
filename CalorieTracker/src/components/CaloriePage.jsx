import React from 'react';
import '../styles/CaloriePage.css';
import CalorieBox from './CalorieBox';

const calorieArr =[
    {
        title: "Pizza",
        calories: 100
    },
    {
        title: "Burger",
        calories: 33
    },
    {
        title: "Hot dog",
        calories: 48
    },
    {
        title: "Pasta",
        calories: 53
    },
    {
        title: "Chicken",
        calories: 550
    },
    {
        title: "Sandwich",
        calories: 29
    }
    
];


function CaloriePage (){
return(
    <div className="page">
        <div className="container">
            {
                calorieArr.map(element => (
                    <CalorieBox title={element.title} calories ={element.calories}/>
                ))
            }
        </div>
    </div>
)}

export default CaloriePage