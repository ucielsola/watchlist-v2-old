import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsuscribe;
	}, []);

	const value = {
		currentUser,
		signup,
	};

	return (
		<div>
			<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
		</div>
	);
};
