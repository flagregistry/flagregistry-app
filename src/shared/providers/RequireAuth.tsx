import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuthStore } from '../stores/authStore'

export const RequireAuth = () => {
    const location = useLocation()
    const { isAuthenticated } = useAuthStore.getState()

    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <Outlet />
}
