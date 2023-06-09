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
				if (comparingList[0]?.id === data.id) {
					toast.warning("Выберите другой товар.", { theme: "dark" });
					return;
				}
				toast.success("Успешно добавлено.", { theme: "dark" });
				dispatch(addProductToCompare(card));
				// localStorage.setItem(
				// 	"compare",
				// 	JSON.stringify([...JSON.parse(localStorage.getItem("compare")), card])
				// );
				break;
			case 2:
				toast.warning("Максимальное колличество достигнуто.", {
					theme: "dark",
				});
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
