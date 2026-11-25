export {}

declare global {
    interface Window {
        env: {
            VITE_API_URI: string
            VITE_SIGNALR_URI: string
            VITE_APP_VERSION: string
            VITE_KEYCLOAK_URL: string
            VITE_KEYCLOAK_REALM: string
            VITE_KEYCLOAK_CLIENT_ID: string
        }
    }
}
