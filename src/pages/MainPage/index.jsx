import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Preloader from "../../components/Preloader";
import { fetchProducts } from "../../redux/actions";
import Card from "./Card";
import s from "./mainpage.module.scss";

const MainPage = () => {
	const products = useSelector((state) => state.products.productList);
	const loadingStatus = useSelector((state) => state.products.loadingStatus);
	const dispatch = useDispatch();

	const getProducts = () => {
	};

	useEffect(() => {
		getProducts();
	}, []);

	if (loadingStatus === "loading") return <Preloader />;
	else if (loadingStatus === "error") return <p>Error</p>;

	const displayProducts = () =>
		products.map((el) => <Card key={el.id} data={el} />);

	return (
		<div className={s.root}>
			<ToastContainer position="top-left" autoClose="3000" />
			<div className={s.cardList}>{displayProducts()}</div>
		</div>
	);
};

export default MainPage;
