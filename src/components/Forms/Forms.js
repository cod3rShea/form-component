import React, { useState } from "react";

const Forms = () => {
	const [person, setPerson] = useState({
		firstName: "",
		lastName: "",
		age: "",
		gender: "",
		email: "",
	});

	const [people, setPeople] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (person.firstName && person.lastName && person.age && person.email) {
			const newPerson = {
				...person,
				id: new Date().getTime().toString(),
			};
			setPeople([...people, newPerson]);
			setPerson({
				firstName: "",
				lastName: "",
				age: "",
				gender: "",
				email: "",
			});
		}
	};

	console.log(person.gender);

	return (
		<article>
			<h2>Forms</h2>
			<form className="form">
				<div className="form-control">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={person.firstName}
						onChange={handleChange}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="LastName"
						name="lastName"
						value={person.lastName}
						onChange={handleChange}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="age">Age:</label>
					<input
						type="text"
						id="age"
						name="age"
						value={person.age}
						onChange={handleChange}
					/>
				</div>
				<div className="form-control">
					<label htmlFor={person.gender}>Gender:</label>
					<select name="gender" onChange={handleChange} id="gender">
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="wont say">Wont Say</option>
					</select>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={person.email}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn" onClick={handleSubmit}>
					Submit
				</button>
			</form>
			{people.map((person) => {
				const { firstName, lastName, age, gender, email, id } = person;
				return (
					<div className="item" key={id}>
						<h4>
							{firstName} {lastName}
						</h4>
						<span>{age}</span>
						<span>{gender}</span>
						<p>{email}</p>
					</div>
				);
			})}
		</article>
	);
};

export default Forms;
