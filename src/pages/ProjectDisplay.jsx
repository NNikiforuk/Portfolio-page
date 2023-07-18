import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.scss";
import { Link } from "react-router-dom";

export default function ProjectDisplay() {
	const { id } = useParams();
	const project = projectList[id];

	return (
		<div className="project">
			<Link
				style={{ textDecoration: "none" }}
				to={project.deploy}
				target="_blank"
			>
				<h1>{project.name}</h1>
				<img src={project.image} alt="project screenshot" />
			</Link>

			<h3>Used technologies/tools:</h3>
			<p>{project.skills}</p>

			<h3>Functionalities:</h3>
			<ol>
				{project.functionalities.map((el, index) => (
					<li key={index}>{el}</li>
				))}
			</ol>
		</div>
	);
}
