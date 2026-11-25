import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from './features/home/pages/HomePage'
import { ErrorPage } from './features/home/pages/ErrorPage'

export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '*', element: <ErrorPage /> },
])
