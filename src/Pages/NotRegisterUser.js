import React from 'react'
import Context from '../Context'
import { UserForm } from '../Components/UserForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <UserForm onSubmit={activateAuth} />
      }
    }
  </Context.Consumer>
)
