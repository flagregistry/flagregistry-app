import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NotFound from '@/assets/images/not-found.svg'

export const ErrorPage = () => {
    const { t } = useTranslation()

    return (
        <div className="error-layout">
            <div className="error-content">
                <img src={NotFound} alt={t('app.errors.alt')} />
                <Link to="/">{t('app.errors.back')}</Link>
            </div>
        </div>
    )
}
