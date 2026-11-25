import axios from 'axios'

import { env } from './env'

export const api = axios.create({
    baseURL: env.VITE_API_URI,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
})
