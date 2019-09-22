import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'http://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
