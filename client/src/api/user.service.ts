import { AxiosResponse } from "axios"
import { saveToStorage } from "../utils/saveToStorage"
import { AuthResponce } from "./auth.service"
import api from "./interseptors"

interface UpdateProfileInfoDto{
    name:string
    surname:string
    phone:string
}

export const UserService={
    async updateProfile(updateProfileInfoDto:UpdateProfileInfoDto):Promise<AxiosResponse<AuthResponce>>{
        const response =await api.post('user/update',updateProfileInfoDto)
        if (response.data.user) {
			localStorage.setItem('user', JSON.stringify(response.data.user))
		}
        return response
    },

    getProfile(){   
        return localStorage.getItem("user")
    }
}