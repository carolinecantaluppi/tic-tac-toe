import { useEffect, useState } from "react"
import { GetFromLocalStorage, RemoveFromLocalStorage } from "../../_shared/helper/localStorageFunction"
import { LocalStorageUserKey } from "../../_shared"
import { loginResponse } from "../../types"
import { useNavigate } from "react-router-dom"


export const Logout = () => {
    const navigate = useNavigate()
    
    useEffect (() => {
        RemoveFromLocalStorage(LocalStorageUserKey)
        navigate('/sign-in')
    }, [navigate])

    return null
}
