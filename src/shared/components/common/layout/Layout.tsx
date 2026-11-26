import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { SidebarInset, SidebarProvider } from '@/shared/components/ui/layout/sidebar'
import { TooltipProvider } from '@/shared/components/ui/overlays/tooltip'
import { useThemeStore } from '@/shared/stores/themeStore'

import { LayoutHeader } from './LayoutHeader'
import { LayoutSidebar } from './LayoutSidebar'

import '@/shared/styles/common/layout/Layout.css'

export const Layout = () => {
    const theme = useThemeStore((state) => state.theme)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])

    return (
        <TooltipProvider>
            <SidebarProvider>
                <LayoutSidebar />
                <SidebarInset className="inset">
                    <LayoutHeader />
                    <div className="content">
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    )
}
