const initialState = {
	comparingProductList: [],
};

const comparing = (state = initialState, action) => {
	switch (action.type) {
		case "PRODUCT_ADD_TO_COMPARE":
			return {};

		case "PRODUCT_DELETE_FROM_COMPARE":
			return {};

		default:
			return state;
	}
};

export default comparing;
