import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import { AuthProvider } from './context/AuthContext';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

function App() {
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<Router>
			<AuthProvider>
				<GlobalProvider>
					<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
						<Header />
						<Switch>
							<Route path="/signup" component={SignUp} />
							<Route path="/login" component={LogIn} />
							<PrivateRoute exact path="/" component={Watchlist} />
							<PrivateRoute path="/watched" component={Watched} />
							<PrivateRoute path="/add" component={Add} />
						</Switch>
					</ThemeContext.Provider>
				</GlobalProvider>
			</AuthProvider>
		</Router>
	);
}

export default App;
