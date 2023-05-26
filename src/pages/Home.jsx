import "../styles/Home.scss";

import Socials from "../components/Socials"

export default function Home() {
	return (
		<div className="home">
			<div className="about">
				<h1>Hi! I'm Natalia</h1>
				<div className="headline">
					<p>Front-end developer with a passion for learning new things</p>
					<Socials />
				</div>
			</div>
			<div className="skills">
				<h2>Skills</h2>
				<ol className="list">
					<li className="item">
						<h3>Front-end</h3>
						<div className="details">
							<p>HTML, Javascript, ReactJS</p>
							<p>CSS, SCSS, Flexbox, Grid, Bootstrap, MaterialUI</p>
							<p>npm, Firebase, API, webpack</p>
						</div>
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
