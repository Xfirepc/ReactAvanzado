import React from 'react'
import { GlobalStyle } from './Styles/GlogbalStyles'
import { Logo } from './Components/Logo'

import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { User } from './Pages/User'
import { Favs } from './Pages/Favs'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { NavBar } from './Components/NavBar'

import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
