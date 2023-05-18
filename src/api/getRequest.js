import axios from "axios";

export const getProductsList = async () => {
	const response = await axios.get("http://localhost:3001/products");
    return response.data
};
