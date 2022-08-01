import { AuthResponce } from "../api/auth.service"

export const saveToStorage = (data: AuthResponce) => {
	localStorage.setItem('token', JSON.stringify(data.token))
	localStorage.setItem('user', JSON.stringify(data.user))
}