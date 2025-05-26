import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const sayHello = () => {
        alert("You clicked Hello.");
    };

    const sayHi = () => {
        alert("You clicked Hi.");
    };

    const sayBye = () => {
        alert("You clicked Bye.");
    };

    return (
        <>
            <div className="app">
                <h1>Click a Button</h1>
                <button onClick={sayHello}>Hello</button>
                <button onClick={sayHi}>Hi</button>
                <button onClick={sayBye}>Bye</button>
            </div>
        </>
    )
}

export default App
