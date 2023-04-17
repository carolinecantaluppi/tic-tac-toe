import axios, { AxiosResponse } from "axios"
import { loginResponse } from "../types"

interface LoginRequest {
    username: string, 
    password: string
}

export const login = async (username: string, password: string) => {
   
    const request: LoginRequest = {
        username,
        password
    }
    
    return await axios
        .post(`/auth/login`, request)
        .then((response: AxiosResponse<loginResponse>) => {
            return response.data
        })
        .catch(() => {
            return undefined
        })
}