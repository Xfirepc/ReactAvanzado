import React from 'react'
import { FavsWithQuery } from '../Container/GetFavorites'
import { Layout } from '../Components/Layout'

export default () => (
  <>
    <Layout title='Favoritos - Las mascotas que te han enamorado!' subtitle='Las mascotas mas hermosas para ti!' />
    <FavsWithQuery />
  </>
)
