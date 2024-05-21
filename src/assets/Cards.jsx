import React from "react";
import vite from "/vite.svg";
import { CheckImage } from "./checkImage";
import Sidebar from "./Sidebar";

const Cards = ({ index,name, avatar, jobtitle,id ,cardClick}) => {

	return (
		<>
			<div className="">
				<div className=" float-right card-container d-flex flex-column p-5 w-100">
					<div className="d-flex  flex-row justify-content-between">
						<div className="card-image">
							<img className="rounded-circle" src={avatar} alt="" />
						</div>
						<div className="info d-flex flex-column justify-content-center align-items-start">
							<div className="d-flex justify-content-start">
								<h3>{index} : {name}</h3>
							</div>
							<div className="text-nowrap">Job Title : {jobtitle}</div>
						</div>
					</div>
					<div className="d-flex my-3 justify-content-center align-items-center">
						<button className="btn btn-danger" onClick={()=>cardClick(id)}> More Info </button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
