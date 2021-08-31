import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const SignUp = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match!');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
		} catch (error) {
			setError('Failed to create an account');
		}
		setLoading(false);
	}

	return (
		<div className="sign-up__container">
			<h2 className="sign-up__title">Sign Up</h2>
			{error && <h3 className="sign-up__error-msg">{error}</h3>}
			<form action="" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="email"></label>
					<input type="email" name="password" ref={emailRef} />
				</div>
				<div className="form-group">
					<label htmlFor="password"></label>
					<input type="password" name="password" ref={passwordRef} />
				</div>
				<div className="form-group">
					<label htmlFor="password-confirm"></label>
					<input type="password" name="password-confirm" ref={passwordConfirmRef} />
				</div>
				<div className="form-group">
					<button disabled={loading} type="submit">
						Sign Up
					</button>
				</div>
			</form>
			<div className="to-login">Already have an accounet? Log In!</div>
		</div>
	);
};
