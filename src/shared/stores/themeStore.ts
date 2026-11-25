import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { ThemeColor } from '../types/types'

type ThemeState = {
    theme: ThemeColor
    setTheme: (theme: ThemeColor) => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
            setTheme: (theme: ThemeColor) => set({ theme }),
        }),
        {
            name: 'theme',
        },
    ),
)
