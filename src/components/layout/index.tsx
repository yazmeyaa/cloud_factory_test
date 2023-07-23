import { AppHeader } from "components/header"
import { FC, ReactNode } from "react"
import './style.scss'

export interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <AppHeader />
            <main className="app_content">
                {children}
            </main>
        </>
    )
}