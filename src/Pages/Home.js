import React, { Fragment } from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCards } from '../Container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
export const Home = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Las mascotas mas bellas!</title>\
        <meta name='description' content='Comparte las mejores fotos de tus mascotas' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
