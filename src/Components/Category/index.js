import React from 'react'

const DEFAULT_IMAGE = 'http://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <a href={path}>
    <img src={cover} />
    {emoji}
  </a>
)
