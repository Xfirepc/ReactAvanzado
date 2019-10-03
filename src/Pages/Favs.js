import React from 'react'
import { FavsWithQuery } from '../Container/GetFavorites'
import { Helmet } from 'react-helmet'

export const Favs = () => (
  <>
    <Helmet>
      <title>Favoritos - Las mascotas que te han enamorado!</title>\
      <meta name='description' content='Las mascotas mas hermosas para ti!' />
    </Helmet>
    <h1> Favoritos </h1>
    <FavsWithQuery />
  </>
)
