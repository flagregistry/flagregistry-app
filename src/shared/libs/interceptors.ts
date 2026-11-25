import { api } from './axios'
import { keycloak } from './keycloak'
import { useAuthStore } from '../stores/authStore'

api.interceptors.request.use(async (config) => {
    try {
        await keycloak.updateToken(30)
        if (keycloak.token) {
            config.headers.Authorization = `Bearer ${keycloak.token}`
        }
        return config
    } catch (error) {
        useAuthStore.getState().clearAuth()
        return Promise.reject(error)
    }
})

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original = error.config
        if (error.response?.status !== 401 || original._retry) {
            return Promise.reject(error)
        }
        original._retry = true

        try {
            await keycloak.updateToken(-1)
            if (keycloak.token) {
                original.headers.Authorization = `Bearer ${keycloak.token}`
            }
            return api(original)
        } catch {
            useAuthStore.getState().clearAuth()
            return Promise.reject(error)
        }
    },
)
