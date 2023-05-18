import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Card from "./Card";
import s from "./comparepage.module.scss";

const ComparePage = () => {
	const comparingList = useSelector(
		(state) => state.comparing.comparingProductList
	);

	// const comparingList = localStorage.getItem("compare")
	// 	? JSON.parse(localStorage.getItem("compare"))
	// 	: storeComparingList;
	// console.log(comparingList);

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
					{Math.abs(comparingList[0].price - (comparingList[1]?.price || 0))}$
				</p>
			</div>
			{comparingList.map((e) => (
				<Card key={e.id} data={e} desc={e.description} />
			))}
		</div>
	);
};

export default ComparePage;
