import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './styles'
import { MiniSpinner } from '../Spinner'
export const UserForm = ({ disabled, error, onSubmit, title = '' }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <Button>{title} { disabled ? <MiniSpinner /> : null }</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}
