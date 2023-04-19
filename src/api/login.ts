import axios, { AxiosResponse } from "axios"
import { loginResponse } from "../types"

interface LoginRequest {
    username: string, 
    password: string
}

export const login = async (username: string, password: string): Promise <loginResponse> => {
   
    if (username === 'gyfama@email.com' && password === '12345') {
        return Promise.resolve({id: 1, username: 'gyfama', firstName: 'gy', lastName: 'fama', email: 'gyfama@email.com'})
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