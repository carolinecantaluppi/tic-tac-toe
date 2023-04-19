import React, { useContext, useState } from 'react'
import { AuthContext, LocalStorageUserKey } from '../../_shared'
import { login } from '../../api'
import { RemoveFromLocalStorage, SaveToLocalStorage } from '../../_shared/helper/localStorageFunction'
import { useNavigate } from 'react-router-dom'

export const LoginPath = 'login'

export const Login = () => {

  interface LoginRequest {
    email: string,
    password: string,
  }

  const request: LoginRequest = {
    email: '',
    password: ''
  }

  const [invalidLogin, setInvalidLogin] = useState<boolean>(false)
  const {user, setUser} = useContext(AuthContext)
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  // const inputCreate = ()
  const navigate = useNavigate()

  const loginFunction = async (user: string, pass: string) => {
    console.log(user, pass);
    login(user,pass)
      .then((response) => {
        SaveToLocalStorage(LocalStorageUserKey, response)
        setUser(response)
        navigate("/scoreboard");
      })
      .catch(() => {
        setInvalidLogin(true)
        RemoveFromLocalStorage(LocalStorageUserKey)
      })
  }

  return (
    <form>
      {invalidLogin && <h3>Invalid Login</h3>}
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(event) => {setInvalidLogin(false); setEmailAddress(event.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(event) => {setInvalidLogin(false); setPassword(event.target.value)}}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="button" className="btn btn-primary" onClick={() => {loginFunction(emailAddress, password)}}>
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  )
}
