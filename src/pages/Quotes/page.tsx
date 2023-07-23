import { Link } from "components/link"
import './page.scss'

export const QuotesPage = () => {
    return (
        <div>
            <h1>Выберите источник:</h1>
            <nav>
                <ul className="quotes_list">
                    <li>
                        <Link to={'/quotes/poloniex'}>Poloniex</Link>
                    </li>
                    <li>
                        <Link to={'/quotes/xeinolop'}>Xeinolop</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}