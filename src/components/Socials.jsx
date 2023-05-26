import MailIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Link } from "react-router-dom";

export default function Socials() {
	return (
		<div className="socials">
			<Link to="https://github.com/NNikiforuk" target="_blank">
				<GitHubIcon className="contactIcon" />
			</Link>
			<Link to="mailto:natnikiforuk@gmail.com?" target="_blank">
				<MailIcon className="contactIcon" />
			</Link>
			<Link to="https://www.linkedin.com/in/natnikiforuk/" target="_blank">
				<LinkedInIcon className="contactIcon" />
			</Link>
		</div>
	);
}
