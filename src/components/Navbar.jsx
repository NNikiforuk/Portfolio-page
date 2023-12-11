import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setExpandNavbar(false);
	}, [location]);

	const burgerBtnHandler = () => {
		setExpandNavbar((prev) => !prev);
	};

	return (
		<nav className="navbar">
			<div className="burgerBtn">
				<button onClick={burgerBtnHandler}>
					{expandNavbar ? <CloseIcon /> : <ReorderIcon />}
				</button>
			</div>
			<div className={`links ${expandNavbar ? "open" : "close"}`}>
				<Link to={"/"}> Home </Link>
				<Link to={"/projects"}> Projects </Link>
				<Link to={"/experience"}> Experience </Link>
				<Link to={"/education"}> Education </Link>
			</div>
			<div className={`linksIPad ${expandNavbar ? "open" : "close"}`}>
				<Link to={"/"}> Home </Link>
				<Link to={"/projects"}> Projects </Link>
				<Link to={"/experience"}> Experience </Link>
				<Link to={"/education"}> Education </Link>
			</div>
		</nav>
	);
}
