import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { loginResponse } from './types';
import { AuthContext, AuthContextType } from './_shared';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login, { LoginPath } from './components/Login.component/login.component'
import SignUp, { SignUpPath } from './components/Signup.component/signup.component'
import { Navbar, NotFound } from './components';
import { Game } from './game';

interface AppProps {
  title?: string;
  description?: string
  body?: {
    first: string,
    second?: string
  }
}

export const App = (
  {
    title,
    description,
    body
  }: AppProps) => {

  const [user, setUser] = useState<loginResponse>();

  const authContextInitialValue: AuthContextType = {
    user, 
    setUser
  }

  return (
    <AuthContext.Provider value={authContextInitialValue}>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/game' element={<Game />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
