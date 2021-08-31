import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const LogIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

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
		<div className="login__container">
			<h2 className="login__title">Log In</h2>
			{error && <h3 className="login__error-msg">{error}</h3>}
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
					<button disabled={loading} type="submit">
						Log In
					</button>
				</div>
			</form>
			<div className="to-sign-up">New in town? <Link to="/login">Sign Up!</Link> </div>
		</div>
	);
};
