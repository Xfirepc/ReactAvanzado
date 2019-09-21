import React from 'react'
import { GlobalStyle } from './Styles/GlogbalStyles'
import { PhotoCardWithQuery } from './Container/PhotoCardWithQuery'
import { Logo } from './Components/Logo'
import { Home } from './Pages/Home'
import { Router } from '@reach/router'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </>
  )
}
