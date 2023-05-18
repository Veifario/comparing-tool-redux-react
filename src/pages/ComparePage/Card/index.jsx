import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeProductFromCompare } from "../../../redux/actions";
import s from "./card.module.scss";

const Card = ({ data, desc }) => {
	const comparingList = useSelector(
		(state) => state.comparing.comparingProductList
	);
	const dispatch = useDispatch();

	const removeFromComparing = () => {
		const deletedData = comparingList.filter((e) => e.id !== data.id);
		dispatch(removeProductFromCompare(deletedData));
		toast.success("Успешно удалено", { theme: "dark" });
	};

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
