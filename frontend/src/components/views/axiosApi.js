import axios from 'axios'

const IP = "localhost"

const axiosInstance = axios.create({
    baseURL = "http://" + IP + "/api",
    timeout: 5000,
    headers: {
        "Authorization": "TOKEN" + localStorage.getItem("TOKEN"),
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})