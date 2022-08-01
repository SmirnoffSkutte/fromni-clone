import axios from "axios";
import { useContext } from "react";

const api=axios.create({
    baseURL:'http://localhost:4200/api'
})

api.interceptors.request.use((config)=>{
    const someStr=localStorage.getItem("token")
    let bear=''
    if(someStr){
    bear=someStr.replace(/['"]+/g, '')

    }
    config.headers!.Authorization = `Bearer ${bear}`
    return config
})

api.interceptors.response.use((config)=>{
    return config
},(error=>{
    if(error.response.status==401){
        localStorage.clear()
    }
}))

export default api