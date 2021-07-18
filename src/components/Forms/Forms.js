import React, { useState } from "react";

const Forms = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	console.log(people);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && lastName && email) {
			const person = {
				firstName: firstName,
				lastName: lastName,
				email: email,
			};

			setPeople((people) => {
				return [...people, person];
			});

			setFirstName("");
			setLastName("");
			setEmail("");
		} else {
			console.log("enter value");
		}
	};

	return (
		<article>
			<h2>Forms</h2>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="LastName">Last Name:</label>
					<input
						type="text"
						id="LastName"
						name="LastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</article>
	);
};

export default Forms;
