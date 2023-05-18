const initialState = {
	productList: [],
	loadingStatus: "loaded",
};

const products = (state = initialState, action) => {
	switch (action.type) {
		case "PRODUCTS_FETCHING":
			return {
				...state,
				loadingStatus: "loading",
			};
		case "PRODUCTS_FETCHED":
			return {
				...state,
				productList: action.payload,
				loadingStatus: "loaded",
			};

		case "PRODUCTS_FETCHING_ERROR":
			return {
				...state,
				loadingStatus: "error",
			};
		default:
			return state;
	}
};

export default products;
