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
				<h2>Skills and tools</h2>
				<ol className="list">
					<li className="item">
						<div className="details">
							<p>HTML, Javascript, React.js, Next.js</p>
							<p>CSS, SCSS, Tailwind</p>
							<p>Flexbox, Grid, Bootstrap</p>
							<p>Figma, Firebase, API, git, webpack</p>
						</div>
					</li>
				</ol>
			</div>
		</div>
	);
}
