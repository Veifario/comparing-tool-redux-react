import { getProductsList } from "../api/getRequest";

//Products fetching
export const fetchProducts = () => async (dispatch) => {
	try {
		dispatch(fetchingProducts());
		const data = await getProductsList();
		dispatch(fetchedProducts(data));
	} catch (error) {
		dispatch(fetchingProductsError());
	}
};

export const fetchingProducts = () => ({ type: "PRODUCTS_FETCHING" });
export const fetchedProducts = (data) => ({
	type: "PRODUCTS_FETCHED",
	payload: data,
});
export const fetchingProductsError = () => ({
	type: "PRODUCTS_FETCHING_ERROR",
});

//Products comparing
export const addProductToCompare = (element) => ({
	type: "PRODUCT_ADD_TO_COMPARE",
	payload: element,
});
export const removeProductFromCompare = (filteredProducts) => ({
	type: "PRODUCT_DELETE_FROM_COMPARE",
	payload: filteredProducts,
});
