import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(function () {
    window.fetch('https://petgram-server-xfire.vinygfx.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  const renderList = () => {
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  }
  return (
    renderList()
  )
}
