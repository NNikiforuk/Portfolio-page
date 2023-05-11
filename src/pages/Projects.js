import "../styles/Projects.scss"
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";


export default function Projects() {
	return (
		<div className="projects">
			<h1 className="projectsH1">My projects</h1>
			<div className="projectsList">
				{projectList.map((project, index) => {
					return <ProjectItem name={project.name} image={project.image} id={index} key={index} />;
				})}
			</div>
		</div>
	);
}
