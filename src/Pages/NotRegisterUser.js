import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../Components/UserForm'
import { RegisterMutation } from '../Container/RegisterMutation'
import { LoginMutation } from '../Container/LoginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return <>
    <RegisterMutation>
      {
        (register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
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
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg = error && 'Ocurrio un problema.'
          return <UserForm onSubmit={onSubmit} title={'Iniciar sesión'} error={errorMsg} disabled={loading} />
        }
      }
    </LoginMutation>
  </>
}
