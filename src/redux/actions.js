//Products fetching

import axios from "axios";

const fetchUsers = () => async (dispatch) => {
	try {
		dispatch(request());
		const { data } = await axios.get("");
		dispatch(requestDone(data));
	} catch (error) {
		dispatch(requestError(error.message));
	}
};

//Products comparing
