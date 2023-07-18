import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";

export default function ProjectItem({ image, name, id, github, deploy, error }) {
	return (
		<div className="projectItem">
			<div className="upper">
				<Link to={deploy} target="_blank" style={{ textDecoration: "none" }}>
					<div
						style={{ backgroundImage: `url(${image})` }}
						className="backgroundImage"
					></div>
					<h1>{name}</h1>
				</Link>
				<p className="error">{error}</p>
			</div>
			<div className="below">
				<Link to={github} target="_blank">
					<GitHubIcon className="icon" />
				</Link>

				<div className="details">
					<Link
						to={"/project/" + id}
						style={{ textDecoration: "none" }}
					>
						<InfoIcon className="icon" />
					</Link>
				</div>
			</div>
		</div>
	);
}
