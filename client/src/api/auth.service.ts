import { AxiosError, AxiosResponse } from "axios";
import { Navigate } from "react-router-dom";
import { saveToStorage } from "../utils/saveToStorage";
import api from "./interseptors";

export interface AuthResponce{
    token:string
    user:{
        _id:string
        email:string
        name:string
        surname:string
        phone:string
    }

}

export const AuthService={
    async login(email:string,password:string):Promise<AxiosResponse<AuthResponce>>{
        const response =await api.post<AuthResponce>('auth/login',{email,password})
        if (response.data.token) {
			saveToStorage(response.data)

            // Navigate({to:"/homepage"})
		}
        return response
    },
    async registration(email:string,password:string):Promise<AxiosResponse<AuthResponce>>{
        const response=await api.post<AuthResponce>('auth/registration',{email,password})
        if (response.data.token) {
			saveToStorage(response.data)
            // Navigate({to:"/homepage"})
		}
        return response
    }
}

