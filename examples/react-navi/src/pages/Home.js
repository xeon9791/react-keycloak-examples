import React, { useCallback } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { useAxios } from '../utils/hooks'

export default () => {
  const { keycloak } = useKeycloak()
  // const axiosInstance = useAxios(BACKEND_SERVER) // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const axiosInstance = useAxios() // see https://github.com/panz3r/jwt-checker-server for a quick implementation

  const callApi = useCallback(() => {
    axiosInstance.get('/apiBackEnd/api/userInfo')
    axiosInstance.get('/apiBackEnd/kcAuth/usrAuth')
  }, [axiosInstance])

  return (
    <div>
      <div>User is {!keycloak.authenticated ? 'NOT ' : ''} authenticated</div>

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  )
}
