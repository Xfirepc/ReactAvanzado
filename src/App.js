import React, { useContext } from 'react'
import { GlobalStyle } from './Styles/GlogbalStyles'
import { Logo } from './Components/Logo'
import { NotFound } from './Pages/NotFound'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { User } from './Pages/User'
import { Favs } from './Pages/Favs'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { NavBar } from './Components/NavBar'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  console.log(isAuth)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </>
  )
}
