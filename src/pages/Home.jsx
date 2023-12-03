import "../styles/Home.scss";
import { TypeAnimation } from "react-type-animation";
import MailIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home">
			<div className="about">
				<h1>
					<TypeAnimation
						sequence={["Natalia Nikiforuk", 1500]}
						style={{ fontSize: "2em" }}
						repeat={Infinity}
					/>
				</h1>
				<div className="headline">
					Junior Front-end developer with a passion for learning new things
					<div className="socials">
						<Link to="https://github.com/NNikiforuk" target="_blank">
							<GitHubIcon className="contactIcon" />
						</Link>
						<Link to="mailto:natnikiforuk@gmail.com?" target="_blank">
							<MailIcon className="contactIcon" />
						</Link>
						<Link
							to="https://www.linkedin.com/in/natnikiforuk/"
							target="_blank"
						>
							<LinkedInIcon className="contactIcon" />
						</Link>
						<Link to="tel:+48512227842">
							<LocalPhoneIcon className="contactIcon" />
						</Link>
					</div>
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
