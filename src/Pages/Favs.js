import React from 'react'
import { FavsWithQuery } from '../Container/GetFavorites'
import { Layout } from '../Components/Layout'

export const Favs = () => (
  <>
    <Layout title='Favoritos - Las mascotas que te han enamorado!' subtitle='Las mascotas mas hermosas para ti!' />
    <FavsWithQuery />
  </>
)
