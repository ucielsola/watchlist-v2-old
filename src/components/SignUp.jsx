import React, { useRef, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

import './login-signup.css';

export const SignUp = () => {
	// Theme Switcher
	const { darkTheme } = useContext(ThemeContext);
	let darkClass = darkTheme ? ' dark' : '';
	// SignUp
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match!');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch (error) {
			setError('Failed to create an account');
		}
		setLoading(false);
	}

	return (
		<div className={'sign-up__container' + darkClass}>
			<h2 className={'sign-up__title' + darkClass}>Sign Up</h2>
			{error && <h3 className={'sign-up__error-msg' + darkClass}>{error}</h3>}
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
					<label htmlFor="password-confirm" className={'form__pass' + darkClass}></label>
					<input
						type="password"
						name="password-confirm"
						ref={passwordConfirmRef}
						className={'form__input' + darkClass}
					/>
				</div>
				<div className={'form-group' + darkClass}>
					<button disabled={loading} type="submit" className={'form__submit' + darkClass}>
						Sign Up
					</button>
				</div>
			</form>
			<div className={'to-login' + darkClass}>
				Already have an account? <Link to="/login">Log In!</Link>
			</div>
		</div>
	);
};
