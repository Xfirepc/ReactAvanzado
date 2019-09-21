import React from 'react'
import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './Styles/GlogbalStyles'
import { ListOfPhotoCards } from './Container/ListOfPhotoCards'
import { Logo } from './Components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
)
