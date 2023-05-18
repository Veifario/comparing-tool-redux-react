import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./header.module.scss";

const Header = () => {
	const comparingList = useSelector(
		(state) => state.comparing.comparingProductList
	);

	return (
		<div className={s.root}>
			<img
				src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
				alt=""
			/>
			<Link to="/">Home</Link>
			<Link to="/compare">
				Compare <span className={s.amount}>{comparingList.length}</span>
			</Link>
		</div>
	);
};

export default Header;
