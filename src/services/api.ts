import axios from "axios";

export const api = axios.create({
    baseURL: "https://adonismobile.onrender.com",
    headers: {
        Accept: 'application/json'
    }    
})
