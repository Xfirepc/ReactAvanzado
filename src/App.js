import React, { Fragment } from 'react'
import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './Styles/GlogbalStyles'
import { ListOfPhotoCards } from './Container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './Container/PhotoCardWithQuery'
import { Logo } from './Components/Logo'

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
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </Fragment>
      }
    </>
  )
}
