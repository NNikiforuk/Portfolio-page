import "../styles/Home.scss"

import MailIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
	return (
		<div className="home">
			<div className="about">
				<h1>Hi! I'm Natalia</h1>
				<div className="headline">
					<p>
						A wanna be front-end developer with a passion for learning new
						things
					</p>
					<MailIcon />
					<GitHubIcon />
					<LinkedInIcon />
				</div>
			</div>
			<div className="skills">
				<h2>Skills</h2>
				<ol className="list">
					<li className="item">
						<h3>Front-end</h3>
						<div className="details">HTML, CSS, Javascript, NPM, ReactJS, SCSS, Flexbox, Grid, Bootstrap, MaterialUI</div>
					</li>
					<li className="item">
						<h3>Languages</h3>
						<div className="items">polish (native), english (intermediate)</div>
					</li>
				</ol>
			</div>
		</div>
	);
}
