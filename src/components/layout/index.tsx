import { AppHeader } from "components/header"
import { FC, ReactNode } from "react"

export interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <AppHeader />
            <main>
                {children}
            </main>
        </>
    )
}