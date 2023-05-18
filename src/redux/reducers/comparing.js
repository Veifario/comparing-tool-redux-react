const initialState = {
	comparingProductList: [],
};

const comparing = (state = initialState, action) => {
	switch (action.type) {
		case "PRODUCT_ADD_TO_COMPARE":
			return {
				...state,
				comparingProductList: [...state.comparingProductList, action.payload],
			};

		case "PRODUCT_DELETE_FROM_COMPARE":
			return {
				...state,
				comparingProductList: action.payload,
			};
		default:
			return state;
	}
};

export default comparing;
