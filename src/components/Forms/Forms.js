import React, { useState } from "react";

const Forms = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState("");
	const [sex, setSex] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	console.log(people);
	console.log(firstName);
	console.log(lastName);
	console.log(age);
	console.log(sex);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && lastName && age && sex && email) {
			const person = {
				firstName: firstName,
				lastName: lastName,
				age: age,
				sex: sex,
				email: email,
			};

			setPeople((people) => {
				return [...people, person];
			});
			setFirstName("");
			setLastName("");
			setAge("");
			setSex("");
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
					<label htmlFor="age">Age:</label>
					<input
						type="text"
						id="age"
						name="age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="sex">Sex:</label>
					<select onChange={(e) => setSex(e.target.value)} id="sex">
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
