import React, { useState} from 'react'

export const SignUp = () => {
  
  interface FormDataType {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }

  const formData: FormDataType = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  const [responseBody, setResponseBody] = useState<FormDataType>(formData)

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setResponseBody({...responseBody, [name]: value})
  }

  // Form submission:
  const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault()
    // setResponseBody({...responseBody, firstName: '', lastName: '', email: '', password: ''})
  }

  return (
      <form onSubmit={onSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            id="firstName" 
            name="firstName" 
            onChange={(e)=>inputChange(e)}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input 
            id="lastName" 
            name="lastName" 
            onChange={(e)=>inputChange(e)} 
            type="text" 
            className="form-control" 
            placeholder="Last name" 
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            id="email" 
            name="email" 
            onChange={(e)=>inputChange(e)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            id="password" 
            name="password" 
            onChange={(e)=>inputChange(e)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
  )
}