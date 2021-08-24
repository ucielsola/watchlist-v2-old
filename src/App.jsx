import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { ThemeContext } from './context/ThemeContext';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import './App.css';

function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<GlobalProvider>
		<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
			<Router>
				<Header />

				<main>
					<Switch>
						<Route exact path="/">
							<Watchlist />
						</Route>

						<Route path="/watched">
							<Watched />
						</Route>

						<Route path="/add">
							<Add />
						</Route>
					</Switch>
				</main>
			</Router>
		</ThemeContext.Provider>
		</GlobalProvider>
	);
}

export default App;
