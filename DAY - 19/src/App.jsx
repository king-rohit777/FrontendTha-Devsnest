import React from 'react';
import './styles/App.css';
import Counter from './components/Counter';

function App(){
    return(
        <div className="Heading">
            <h1>COUNTER BUTTONS</h1>
           { [...Array(4)].map( () => <Counter/>)}
        </div>
    );
}

export default App;