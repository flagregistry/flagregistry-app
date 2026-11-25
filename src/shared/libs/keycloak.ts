import Keycloak from 'keycloak-js'

import { env } from '@/shared/libs/env'
import { useAuthStore } from '../stores/authStore'

export const keycloak = new Keycloak({
    url: env.VITE_KEYCLOAK_URL,
    realm: env.VITE_KEYCLOAK_REALM,
    clientId: env.VITE_KEYCLOAK_CLIENT_ID,
})

const syncAuthStore = () => {
    useAuthStore.getState().setAuthenticated(keycloak.authenticated)
}

export const initKeycloak = async () => {
    const { clearAuth } = useAuthStore.getState()
    const redirectUrl = new URL(window.location.href)

    for (const parameter of ['code', 'state', 'session_state', 'iss']) {
        redirectUrl.searchParams.delete(parameter)
    }

    redirectUrl.hash = ''

    await keycloak.init({
        onLoad: 'login-required',
        pkceMethod: 'S256',
        redirectUri: redirectUrl.href,
    })

    syncAuthStore()

    keycloak.onAuthRefreshSuccess = syncAuthStore
    keycloak.onAuthLogout = clearAuth
}
