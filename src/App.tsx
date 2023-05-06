import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { loginResponse } from './types';
import { AuthContext, AuthContextType, LocalStorageUserKey } from './_shared';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Login } from './components/Login.component/login.component'
import { SignUp } from './components/Signup.component/signup.component'
import { Logout, Navbar, NotFound, Scoreboard } from './components';
import { Game } from './game';
import { GetFromLocalStorage } from './_shared/helper/localStorageFunction';

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

  const localUser = GetFromLocalStorage<loginResponse>(LocalStorageUserKey)

  const [user, setUser] = useState<loginResponse | undefined>(localUser);

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
                <Route path='/game' element={<Game/>}/>
              {/* {!!user ? */}
                <>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/sign-up' element={<SignUp/>}/>
                </>
              {/* : */}
                <>
                  <Route path='/scoreboard' element={<Scoreboard playerName={''} points={0} data={0}/>}/>
                  <Route path='/logout' element={<Logout/>}/>
                </>
              {/* }  */}
              <Route path="*" element={<NotFound/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
