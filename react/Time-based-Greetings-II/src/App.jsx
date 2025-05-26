import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import morningImg from './assets/morning.jpg';
import afternoonImg from './assets/afternoon.jpg';
import eveningImg from './assets/evening.jpg';
import nightImg from './assets/night.jpg';

function App() {
    const hour = new Date().getHours();

    let greeting = "";
    let image = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
        image = morningImg;
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        image = afternoonImg;
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
        image = eveningImg;
    } else {
        greeting = "Good Night";
        image = nightImg;
    }

    return (
        <>
            <div className="app">
                <h1>{greeting}!</h1>
                <img src={image} alt={greeting} className="time-image" />
            </div>
        </>
    )
}

export default App
