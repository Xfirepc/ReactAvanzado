import React from 'react'
import Context from '../Context'
import { UserForm } from '../Components/UserForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <>
          <UserForm onSubmit={activateAuth} title={'Registrarse'} />
          <UserForm onSubmit={activateAuth} title={'Iniciar sesión'} />
        </>
      }
    }
  </Context.Consumer>
)
