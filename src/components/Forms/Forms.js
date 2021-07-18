import React, { useState } from "react";

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const Forms = () => {
	return (
		<article>
			<h2>Forms</h2>
			<form className="form">
				<div className="form-control">
					<label htmlFor="firstName">First Name:</label>
					<input type="text" id="firstName" name="firstName" />
				</div>
				<div className="form-control">
					<label htmlFor="LastName">Last Name:</label>
					<input type="text" id="LastName" name="LastName" />
				</div>
				<div className="form-control">
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" />
				</div>
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</article>
	);
};

export default Forms;
