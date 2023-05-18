import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import s from "./card.module.scss";

const Card = ({ data, desc }) => {
	const comparingList = useSelector(
		(state) => state.comparing.comparingProductList
	);
	const dispatch = useDispatch();

	const removeFromComparing = () => {};

	return (
		<div className={s.root}>
			<img src={data.path} alt="" />
			<div className={s.content}>
				<p>{data.name}</p>
				<p>{desc.cpu}</p>
				<p>{desc.display}</p>
				<p>{desc.gpu}</p>
				<p>{desc.storage}</p>
				<p>{desc.memory}</p>
				<p>{data.price}$</p>
			</div>
			<button onClick={removeFromComparing}>Remove</button>
		</div>
	);
};

export default Card;
