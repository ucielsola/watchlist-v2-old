import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import { AuthProvider } from './context/AuthContext';
import { SignUp } from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { ScrollToTop } from './components/ScrollToTop';
import { Add } from './components/Add';
import './App.css';

function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<AuthProvider>
		<SignUp />
		</AuthProvider>
	);
}

export default App;

{
	/* <GlobalProvider>
				<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
					<Router>
						<Header />

						<main>
							<ScrollToTop />
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
			</GlobalProvider> */
}
