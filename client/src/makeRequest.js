import axios from "axios";

const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL
const REACT_APP_API_TOKEN = import.meta.env.VITE_REACT_APP_API_TOKEN
export const makeRequest = axios.create({
    baseURL: REACT_APP_API_URL,
    headers:{
        Authorization: "bearer " + REACT_APP_API_TOKEN
    }
})
