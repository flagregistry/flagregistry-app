import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NotFound from '@/assets/images/not-found.svg'

import '@/features/home/styles/ErrorPage.css'

export const ErrorPage = () => {
    const { t } = useTranslation()

    return (
        <section className="error-layout" aria-labelledby="not-found-title">
            <div className="error-content">
                <img className="error-illustration" src={NotFound} alt="" />
                <h1 className="error-title" id="not-found-title">
                    {t('app.errors.title')}
                </h1>
                <p className="error-description">{t('app.errors.description')}</p>
                <Link className="error-home-link" to="/">
                    {t('app.errors.back')}
                </Link>
            </div>
        </section>
    )
}
