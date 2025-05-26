import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	// Logic Section
	const date = new Date();
	const currentTime = date.getHours(); // gets the current hour (0-23)
	let greeting = "";

	// Conditional logic for greeting
	if (currentTime >= 5 && currentTime <= 11) {
		greeting = "Good Morning";
	} else if (currentTime >= 12 && currentTime <= 17) {
		greeting = "Good Afternoon";
	} else {
		greeting = "Good Evening";
	}

	return (
		<>
			<div className="App">
				<h1>{greeting}!</h1>
				<p>The current time is: {currentTime}</p>
			</div>
		</>
	)
}

export default App
