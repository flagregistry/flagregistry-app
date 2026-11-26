import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { LogOut, Mail, UserRound } from 'lucide-react'

import { keycloak } from '@/shared/libs/keycloak'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/components/ui/overlays/dropdown-menu'

import '@/shared/styles/common/layout/AccountMenu.css'

const initial = (name?: string) => Array.from(name?.trim() ?? '')[0]?.toLocaleUpperCase() ?? ''

export const AccountMenu = () => {
    const [failed, setFailed] = useState<boolean>(false)

    const { t } = useTranslation()

    const claims = keycloak.idTokenParsed ?? keycloak.tokenParsed
    const givenName = typeof claims?.given_name === 'string' ? claims.given_name : undefined
    const familyName = typeof claims?.family_name === 'string' ? claims.family_name : undefined

    const profileQuery = useQuery({
        queryKey: ['keycloak-profile', keycloak.subject],
        queryFn: () => keycloak.loadUserProfile(),
        enabled: Boolean(keycloak.authenticated && (!givenName?.trim() || !familyName?.trim())),
    })

    const initials = initial(givenName) || initial(profileQuery.data?.firstName)
    const lastInitial = initial(familyName) || initial(profileQuery.data?.lastName)

    const runAction = async (action: () => Promise<void>) => {
        setFailed(false)
        try {
            await action()
        } catch {
            setFailed(true)
        }
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        type="button"
                        className="header-avatar account-menu-trigger"
                        aria-label={t('app.account.menu')}
                    >
                        {initials || lastInitial ? initials + lastInitial : <UserRound aria-hidden="true" />}
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={8} className="account-menu-content">
                    <DropdownMenuItem
                        className="account-menu-item"
                        onSelect={() => void runAction(() => keycloak.login({ action: 'UPDATE_PROFILE' }))}
                    >
                        <UserRound aria-hidden="true" /> {t('app.account.profile')}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="account-menu-item"
                        onSelect={() => void runAction(() => keycloak.login({ action: 'UPDATE_EMAIL' }))}
                    >
                        <Mail aria-hidden="true" /> {t('app.account.email')}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        variant="destructive"
                        className="account-menu-item"
                        onSelect={() =>
                            void runAction(() =>
                                keycloak.logout({ redirectUri: new URL('/', window.location.origin).href }),
                            )
                        }
                    >
                        <LogOut aria-hidden="true" /> {t('app.account.logout')}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {failed && (
                <p className="account-menu-error" role="alert">
                    {t('app.account.failed')}
                </p>
            )}
        </>
    )
}
