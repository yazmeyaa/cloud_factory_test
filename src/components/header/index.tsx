import { Link } from "react-router-dom"
import './style.scss'

export const AppHeader = () => {
    return (
        <header className="header">
            <nav className="header_navigation">
                <ul>
                    <li>
                        <Link to="/">О сайте</Link>
                    </li>
                    <i className="vertical_line" />
                    <li>
                        <Link to="/quotes/poloniex">Poloniex</Link>
                    </li>
                    <li>
                        <Link to="/quotes/xeinolop">Xeinolop</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}