import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';

import './App.css';

function App() {
	return (
		<GlobalProvider>
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
		</GlobalProvider>
	);
}

export default App;