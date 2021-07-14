import React from 'react';
import '../styles/CalorieBox.css';


function CalorieBox(props){
    const {title,calories}=props;
return(
    <div className="box">
        <div>{title}</div>
        <div>You have consumed <strong>{calories}</strong> calories today</div>
    </div>
);}

export default CalorieBox;