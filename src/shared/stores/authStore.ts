import { create } from 'zustand'

type AuthState = {
    authenticated: boolean
    setAuthenticated: (authenticated: boolean) => void
    clearAuth: () => void
    isAuthenticated: () => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
    authenticated: false,
    setAuthenticated: (authenticated) => set({ authenticated }),
    clearAuth: () => set({ authenticated: false }),
    isAuthenticated: () => get().authenticated,
}))
