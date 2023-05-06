import axios, { AxiosResponse } from "axios"
import { loginResponse } from "../types"

interface LoginRequest {
    username: string, 
    password: string
}

export const login = async (username: string, password: string): Promise <loginResponse> => {
   
    if (username === 'name@email.com' && password === '12345') {
        return Promise.resolve({id: 1, username: 'name', firstName: 'na', lastName: 'me', email: 'name@email.com'})
    } else {
        return Promise.reject(undefined)
    }

    // const request: LoginRequest = {
    //     username,
    //     password
    // }

    // return axios
    //     .post(`/auth/login`, request)
    //     .then((response: AxiosResponse<loginResponse>) => {
    //         return response.data
    //     })
    //     .catch(() => {
    //         return undefined
    //     })
}