import React, { useRef, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

import './login-signup.css';

export const LogIn = () => {
	// Theme Switcher
	const { darkTheme } = useContext(ThemeContext);
	let darkClass = darkTheme ? ' dark' : '';
	// Login
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch (error) {
			setError('Failed to log in');
		}
		setLoading(false);
	}

	return (
		<div className={'login__container' + darkClass}>
			<h2 className={'login__title' + darkClass}>Log In</h2>
			{error && <h3 className={'login__error-msg' + darkClass}>{error}</h3>}
			<form action="" onSubmit={handleSubmit}>
				<div className={'form-group' + darkClass}>
					<label htmlFor="email" className={'form__email' + darkClass}></label>
					<input type="email" name="password" ref={emailRef} className={'form__input' + darkClass} />
				</div>
				<div className={'form-group' + darkClass}>
					<label htmlFor="password" className={'form__pass' + darkClass}></label>
					<input type="password" name="password" ref={passwordRef} className={'form__input' + darkClass} />
				</div>
				<div className={'form-group' + darkClass}>
					<button disabled={loading} type="submit" className={'form__submit' + darkClass}>
						Log In
					</button>
				</div>
			</form>
			<div className={'to-sign-up' + darkClass}>
				New in town? <Link to="/signup">Sign Up!</Link>{' '}
			</div>
		</div>
	);
};
