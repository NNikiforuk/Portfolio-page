import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

	const burgerBtnHandler = () => {
		setExpandNavbar((prev) => !prev);
	};

	return (
		<div className="navbar" id={expandNavbar ? "open" : "close"}>
			<div className="burgerBtn">
				<button onClick={burgerBtnHandler}>
					<ReorderIcon />
				</button>
			</div>
			<div className="links">
				<Link to={"/"}> Home </Link>
				<Link to={"/projects"}> Projects </Link>
				<Link to={"/experience"}> Experience </Link>
				<Link to={"/education"}> Education </Link>
			</div>
		</div>
	);
}
