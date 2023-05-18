import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProductToCompare } from "../../../redux/actions";
import s from "./card.module.scss";

const Card = ({ data }) => {
	const dispatch = useDispatch();
	const comparingList = useSelector(
		(state) => state.comparing.comparingProductList
	);

	const addToCompare = (card) => {
		switch (comparingList.length) {
			case 0:
			case 1:
				break;
			case 2:
				break;
		}
	};

	return (
		<div className={s.root}>
			<img src={data.path} />
			<div className={s.content}>
				<h2 className={s.title}>{data.name}</h2>
				<p className={s.desc}>{data.description.short}</p>
				<p className={s.price}>US${data.price}</p>
				<button onClick={() => addToCompare(data)}>COMPARE</button>
			</div>
		</div>
	);
};

export default Card;
