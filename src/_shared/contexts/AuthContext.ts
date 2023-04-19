import { createContext } from "react";
import { loginResponse } from "../../types";

export interface AuthContextType {
    user?: loginResponse
    setUser: (x: loginResponse | undefined) => void
}

const AuthContextDefaultValue: AuthContextType = {
    setUser: (_: loginResponse | undefined) => {}
}

// crea una variabile AuthContext che passa i valori di default del AuthContextDefaultValue 
// con il tipo del'interface AuthContextType.
export const AuthContext = createContext<AuthContextType>(AuthContextDefaultValue)