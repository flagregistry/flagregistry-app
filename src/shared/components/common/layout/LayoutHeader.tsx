import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Bell } from 'lucide-react'

import { SidebarTrigger } from '@/shared/components/ui/layout/sidebar'
import { AccountMenu } from './AccountMenu'

import '@/shared/styles/common/layout/LayoutHeader.css'

export const LayoutHeader = () => {
    const { pathname } = useLocation()
    const { t } = useTranslation()

    return (
        <header className="header">
            <SidebarTrigger className="header-toggle" />
            <span className="header-title">{pathname === '/' ? t('app.menu.overview') : t('app.title')}</span>
            <div className="header-actions">
                <Bell className="header-bell" aria-hidden="true" />
                <AccountMenu />
            </div>
        </header>
    )
}
