import "../styles/Home.scss";

import Socials from "../components/Socials";

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
							<ul>
								<li>HTML</li>
								<li>Javascript</li>
								<li>React.js</li>
								<li>Next.js</li>
							</ul>
							<ul>
								<li>CSS/SCSS</li>
								<li>Tailwind</li>
								<li>Flexbox, Grid</li>
								<li>Bootstrap</li>
							</ul>
							<ul>
								<li>Firebase</li>
								<li>Figma</li>
								<li>API</li>
								<li>git</li>
								<li>webpack</li>
							</ul>
						</div>
					</li>
				</ol>
			</div>
		</div>
	);
}
