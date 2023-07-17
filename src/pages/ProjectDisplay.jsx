import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.scss";
import { Link } from "react-router-dom";

export default function ProjectDisplay() {
	const { id } = useParams();
	const project = projectList[id];

	return (
		<div className="project">
			<Link to={project.deploy} target="_blank">
				<h1>{project.name}</h1>
				<img src={project.image} />
			</Link>
			<Link to={project.github} target="_blank">
				<GitHubIcon className="contactIcon" />
			</Link>
			<p>{project.skills}</p>
		</div>
	);
}
