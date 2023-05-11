import React from "react";
import "../styles/Footer.scss";

import MailIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
	return (
		<div className="footer">
			<div className="socials">
				<MailIcon />
				<GitHubIcon />
				<LinkedInIcon />
			</div>
			<p className="year"> &copy; 2023 natnikiforuk.com </p>
		</div>
	);
}
