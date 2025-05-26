import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const numbers = [42, 7, 13, 100, 15]; // static

    return (
        <>
            <h1>Verification Numbers</h1>
            <ol>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ol>
        </>
    )
}

export default App
