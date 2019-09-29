import React from 'react'
import Context from '../Context'
import { UserForm } from '../Components/UserForm'
import { RegisterMutation } from '../Container/RegisterMutation'
import { LoginMutation } from '../Container/LoginMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                const errorMsg = error && 'El usuario ya existe o existe un problema.'
                return <UserForm onSubmit={onSubmit} title={'Registrarse'} error={errorMsg} disabled={loading} />
              }
            }
          </RegisterMutation>
          <LoginMutation>
            {
              (login, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables }).then(activateAuth)
                }
                const errorMsg = error && 'Ocurrio un problema.'
                return <UserForm onSubmit={onSubmit} title={'Iniciar sesión'} error={errorMsg} disabled={loading} />
              }
            }
          </LoginMutation>
        </>
      }
    }
  </Context.Consumer>
)
