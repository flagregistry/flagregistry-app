import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className="page__layout">
            <div className="page__content">
                <Outlet />
            </div>
        </div>
    )
}
