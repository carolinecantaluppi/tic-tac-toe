import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, LocalStorageUserKey } from "../../_shared";
import { RemoveFromLocalStorage } from "../../_shared/helper/localStorageFunction";
import { LoginPath } from "../Login.component/login.component";

export const Navbar = () => {

    const {setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = () => {
        // remove the user from context:
        setUser(undefined)
        // remove the user from storage:
        RemoveFromLocalStorage(LocalStorageUserKey)
        navigate(LoginPath)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/game'}>Game</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/sign-in'}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/sign-up'}>Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/logout'}>Logout</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
