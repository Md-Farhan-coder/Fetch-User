import { useState, useEffect,useRef } from "react";
import "./App.css";
import Cards from "./assets/Cards";
import axios from "axios";
import Sidebar from "./assets/Sidebar";

function App() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [id, setid] = useState(null);

	useEffect(() => {
		axios
			.get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
			.then((data) => {
				setUsers(data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log("Thirds");
				setError(error);
				setLoading(false);
			});
	}, []);

	const handleUserSelect = (user) => {
		setSelectedUser(user);
	};

	const cardClick = (id) => {
		setid(id);
	};


	if (loading)
		return (
			<div style={{ height: "100vh" }} className=" bg-info">
				<div className="h-100 d-flex justify-content-center align-items-center fs-1">
					<span
						class="spinner-border spinner-border-sm  text-black m-5 fs-6"
						style={{ width: "5rem", height: "5rem" }}
					></span>
					Loading..
				</div>
			</div>
		);
	if (error) return <div className="error">No data to show</div>;

	return (
		<>
			<h1 className="text-center container-fluid bg-info text-dark p-3 sticky-top">
				Users
			</h1>
			<div className="main-container">
				<div className="sidebar-container ">
					<Sidebar idParam={id}  />
				</div>

				<div className="post-container">
					{users.map((val, index) => {
						return (
							<Cards
								key={index}
								index={++index}
								name={`${val.profile.firstName}  ${val.profile.lastName}`}
								avatar={val.avatar}
								jobtitle={val.jobTitle}
								id={val.id}
								cardClick={cardClick}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
