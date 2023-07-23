import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"
import './style.scss'

export type CustomLinkProps = {
    children: ReactNode
    to: string
}

const CustomLink: FC<CustomLinkProps> = ({children, to}) => {
    return(
        <Link className="link" to={to}>
            {children}
        </Link>
    )
}

export {CustomLink as Link} 