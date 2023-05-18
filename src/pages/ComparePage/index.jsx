import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Card from "./Card";
import s from "./comparepage.module.scss";

const ComparePage = () => {
	const comparingList = useSelector(
		(state) => state.comparing.comparingProductList
	);

	if (comparingList.length === 0)
		return <h2 className={s.noCompare}>There is no products to compare</h2>;

	return (
		<div className={s.root}>
			<ToastContainer position="top-left" autoClose="3000" />
			<div className={s.description}>
				<p>Name</p>
				<p>CPU</p>
				<p>Display</p>
				<p>GPU</p>
				<p>Storage</p>
				<p>Memory (RAM)</p>
				<p>
					Price Difference <br />
					{/* Here is should be the difference price of two selected propucts */}
				</p>
			</div>
			{comparingList.map((e) => (
				<Card key={e.id} data={e} desc={e.description} />
			))}
		</div>
	);
};

export default ComparePage;
