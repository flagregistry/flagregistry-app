import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'

import { keycloak } from '@/shared/libs/keycloak'

import '@/features/home/styles/HomePage.css'

export const HomePage = () => {
    const { t } = useTranslation()

    const profileQuery = useQuery({
        queryKey: ['keycloak-profile', keycloak.subject],
        queryFn: () => keycloak.loadUserProfile(),
        enabled: keycloak.authenticated,
    })

    return (
        <div className="home">
            <div className="home-intro">
                <div>
                    <h1 className="home-title">{t('app.home.title', { name: profileQuery.data?.firstName })}</h1>
                </div>
            </div>
        </div>
    )
}
