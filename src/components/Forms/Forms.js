import React, { useState } from "react";

const Forms = () => {
	const [person, setPerson] = useState({
		fistName: "",
		lastName: "",
		age: "",
		sex: "",
		email: "",
	});
	const [people, setPeople] = useState([]);

	const handleChange = (e) => {
		e.prevent;
	};

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
					<label htmlFor="LastName">Last Name:</label>
					<input
						type="text"
						id="LastName"
						name="LastName"
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
					<label htmlFor="sex">Sex:</label>
					<select onChange={handleChange} id="sex">
						<option value="" selected disabled hidden>
							Select Sex
						</option>
						<option name="sex" value="Male">
							Male
						</option>
						<option name="sex" value="Female">
							Female
						</option>
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
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
			{people.map((person) => {
				const { firstName, lastName, age, sex, email } = person;
				return (
					<div className="item" key={email}>
						<h4>
							{firstName} {lastName}
						</h4>
						<span>{age}</span>
						<span>{sex}</span>
						<p>{email}</p>
					</div>
				);
			})}
		</article>
	);
};

export default Forms;
