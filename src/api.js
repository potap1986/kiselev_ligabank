import axios from "axios";
import {API} from "./const";

const createApi = () => {
	const api = axios.create({
		baseURL: API.URL,
		timeout: 5000
	});

	const onSucsess = (response) => response;

	const onFail = (err) => {
		throw err;
	}

	api.interceptors.response.use(onSucsess, onFail);

	return api;
}

export {createApi};
