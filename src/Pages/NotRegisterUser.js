import React from 'react'
import Context from '../Context'
import { UserForm } from '../Components/UserForm'
import { RegisterMutation } from '../Container/RegisterMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <>
          <RegisterMutation>
            {
              (register) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                return <UserForm onSubmit={onSubmit} title={'Registrarse'} />
              }
            }
          </RegisterMutation>
          <UserForm onSubmit={activateAuth} title={'Iniciar sesión'} />
        </>
      }
    }
  </Context.Consumer>
)
