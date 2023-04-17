import { createContext } from "react";
import { loginResponse } from "../../types";

export interface AuthContextType {
    user?: loginResponse
    setUser: (x: loginResponse | undefined) => void
}

const AuthContextDefaultValue: AuthContextType = {
    setUser: (_: loginResponse | undefined) => {}
}

export const AuthContext = createContext<AuthContextType>(AuthContextDefaultValue)