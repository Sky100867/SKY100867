import axios from "axios";

const http = axios.create({
    baseURL:""
})
http.interceptors.request.use(
    (config)=>{
        return config
    },
    (err)=>{
        return Promise.reject(err)
    }
)
http.interceptors.request.use(
    (res)=>{
        return res
    },
    (err)=>{
        return Promise.reject(err)
    }
)
export default http