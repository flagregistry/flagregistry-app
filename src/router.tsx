import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from './features/home/pages/HomePage'
import { ErrorPage } from './features/home/pages/ErrorPage'
import { RequireAuth } from './shared/providers/RequireAuth'
import { Layout } from './shared/components/common/layout/Layout'

export const router = createBrowserRouter([
    {
        element: <RequireAuth />,
        children: [
            {
                element: <Layout />,
                children: [{ path: '/', element: <HomePage /> }],
            },
        ],
    },
    { path: '*', element: <ErrorPage /> },
])
