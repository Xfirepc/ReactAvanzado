import React from 'react'
import { GlobalStyle } from './Styles/GlogbalStyles'
import { Logo } from './Components/Logo'
import { Router } from '@reach/router'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { NavBar } from './Components/NavBar'
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
      <NavBar />
    </>
  )
}
