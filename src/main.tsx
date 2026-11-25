import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/fr'

import { App } from './App'
import { initKeycloak } from './shared/libs/keycloak'

import '@/shared/libs/i18n'
import '@/shared/libs/interceptors'

import '@/shared/styles/main.css'

dayjs.locale('fr')
dayjs.extend(isoWeek)
dayjs.extend(timezone)
dayjs.extend(utc)

await initKeycloak()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
