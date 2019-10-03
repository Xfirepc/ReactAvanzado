import React, { Fragment } from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCards } from '../Container/ListOfPhotoCards'
import { Layout } from '../Components/Layout'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <Layout title='Petgram - Las mascotas mas bellas!' subtitle='Comparte las mejores fotos de tus mascotas' />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
