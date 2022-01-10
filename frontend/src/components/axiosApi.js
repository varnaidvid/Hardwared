import axios from 'axios'

const IP = "localhost"

const axiosInstance = axios.create({
    baseURL = "http://" + IP + "/api",
    timeout: 5000,
    headers: {
        "Authorization": "JWT" + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})