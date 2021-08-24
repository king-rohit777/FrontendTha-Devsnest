import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import './styles/App.css'
import ToggleTheme from './components/ToggleTheme';
import { useSelector } from 'react-redux';

function App() {

    const theme = useSelector((state) => state.theme);
    return (
        <div className={theme ? "App dark" : "App"} >
            <ToggleTheme />
            <Form />
            <WeatherCard />
        </div>
    );
}

export default App;