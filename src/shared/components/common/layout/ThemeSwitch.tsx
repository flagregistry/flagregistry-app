import { Moon, Sun } from 'lucide-react'

import { useThemeStore } from '@/shared/stores/themeStore'

import '@/shared/styles/common/layout/ThemeSwitch.css'

export const ThemeSwitch = () => {
    const { theme, setTheme } = useThemeStore()
    const isDark = theme === 'dark'

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isDark}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="theme-switch"
        >
            <span className="theme-switch-sun">
                <Sun className="theme-switch-icon" aria-hidden="true" />
            </span>
            <span className="theme-switch-moon">
                <Moon className="theme-switch-icon" aria-hidden="true" />
            </span>
            <span aria-hidden="true" className="theme-switch-indicator" />
        </button>
    )
}
