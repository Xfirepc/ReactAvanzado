import React from 'react'
import { Button } from './styles.js'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

SubmitButton.PropTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired // Lo que sea que react pueda renderizar
}
