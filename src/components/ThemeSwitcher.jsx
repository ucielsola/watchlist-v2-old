import React, { useState } from 'react';

export const ThemeSwitcher = () => {
	return (
		<div className="switch__wrapper">
			<label htmlFor="switch" className="switch__label">
				Dark Mode
			</label>
			<input name="switch" className="switch__input" type="checkbox"></input>
		</div>
	);
};
