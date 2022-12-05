import axios from "axios";
// import store from "../../redux/store";
import Constant from "../constants";
export const mainWrapper = {
    get,
    post,
    put
};

async function get(url, params = null) {
    handleLogs(url, params);
    try {
        let response = await axios.get(url, {
            params: params,
        });
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function post(url, params) {
    handleLogs(url, params);
    try {
        let response = await axios.post(url, params);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function put(url, params) {
    handleLogs(url, params);
    try {
        let response = await axios.put(url, params);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

function handleResponse(response) {
    if (Constant.debug) {
        console.log("Response:", response);
    }
    if (
        response &&
        response.status === 200 &&
        response.data &&
        response.data.status
    ) {
        return response;
    } else {
        return handleError({ response: response });
    }
}

function handleError(error) {
    if (Constant.debug) {
        console.log("Error:", error);
    }
    if (error.response && error.response.status === 403) {
        // new AuthController().logout();
    }

    if (error.response && error.response.data) return error.response.data;
    else return { status: false };
}

function handleLogs(url, params) {
    if (Constant.debug) {
        console.log("-----------------------------------------------");
        console.log("URL: ", url);
        console.log("Request: ", params);
    }
}
