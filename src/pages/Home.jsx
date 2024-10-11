import "../styles/Home.scss";
import { TypeAnimation } from "react-type-animation";
import MailIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
					Junior Front-end developer
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
				<div className="icon">
					<ArrowDownwardIcon className="arrowIcon" />
				</div>
			</div>
			<div className="skills">
				<div className="group">
					<h3>Programming languages</h3>
					<ul>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>CSS</li>
						<li>SCSS</li>
					</ul>
				</div>
				<div className="group">
					<h3>Libraries & frameworks</h3>
					<ul>
						<li>React.js</li>
						<li>Next.js</li>
						<li>Tailwind</li>
					</ul>
				</div>
				<div className="group">
					<h3>Other</h3>
					<ul>
						<li>Git</li>
						<li>GitHub</li>
						<li>Netlify</li>
						<li>Vercel</li>
						<li>Firebase</li>
						<li>Figma</li>
						<li>Flexbox</li>
						<li>Grid</li>
						<li>Bootstrap</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
