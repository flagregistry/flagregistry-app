import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CreditCard, House } from 'lucide-react'

import logo from '@/assets/favicons/android-chrome-192x192.png'
import { useSidebar } from '@/shared/hooks/useSidebar'
import { ThemeSwitch } from './ThemeSwitch'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/shared/components/ui/layout/sidebar'

import '@/shared/styles/common/layout/LayoutSidebar.css'

export const LayoutSidebar = () => {
    const { pathname } = useLocation()
    const { t } = useTranslation()
    const { setOpenMobile } = useSidebar()

    return (
        <Sidebar className="sidebar">
            <SidebarHeader className="sidebar-brand-section">
                <Link to="/" className="sidebar-brand" onClick={() => setOpenMobile(false)}>
                    <img src={logo} className="sidebar-logo" alt="" />
                    {t('app.title')}
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <nav>
                    <SidebarGroup className="sidebar-navigation">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild className="sidebar-overview">
                                    <Link
                                        to="/"
                                        aria-current={pathname === '/' ? 'page' : undefined}
                                        onClick={() => setOpenMobile(false)}
                                    >
                                        <House />
                                        <span>{t('app.menu.overview')}</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link to="/billing" onClick={() => setOpenMobile(false)}>
                                        <CreditCard />
                                        <span>{t('app.menu.billing')}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </nav>
            </SidebarContent>
            <SidebarFooter className="sidebar-brand-section">
                <ThemeSwitch />
            </SidebarFooter>
        </Sidebar>
    )
}
