import { z } from 'zod'

const EnvSchema = z.object({
    VITE_API_URI: z.string().readonly(),
    VITE_SIGNALR_URI: z.string().readonly(),
    VITE_APP_VERSION: z.string().default('1.0.0').readonly(),
    VITE_KEYCLOAK_URL: z.string().readonly(),
    VITE_KEYCLOAK_REALM: z.string().readonly(),
    VITE_KEYCLOAK_CLIENT_ID: z.string().readonly(),
    VITE_DEV: z.boolean().default(false).readonly(),
})

export const env = EnvSchema.parse({
    VITE_API_URI: import.meta.env.VITE_API_URI ?? window.env.VITE_API_URI,
    VITE_SIGNALR_URI:
        import.meta.env.VITE_SIGNALR_URI ?? window.env.VITE_SIGNALR_URI,
    VITE_APP_VERSION:
        import.meta.env.VITE_APP_VERSION ?? window.env.VITE_APP_VERSION,
    VITE_KEYCLOAK_URL:
        import.meta.env.VITE_KEYCLOAK_URL ?? window.env.VITE_KEYCLOAK_URL,
    VITE_KEYCLOAK_REALM:
        import.meta.env.VITE_KEYCLOAK_REALM ?? window.env.VITE_KEYCLOAK_REALM,
    VITE_KEYCLOAK_CLIENT_ID:
        import.meta.env.VITE_KEYCLOAK_CLIENT_ID ??
        window.env.VITE_KEYCLOAK_CLIENT_ID,
    VITE_DEV: import.meta.env.DEV ?? false,
})
