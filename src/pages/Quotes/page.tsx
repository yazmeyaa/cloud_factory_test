import { Link } from "react-router-dom"

export const QuotesPage = () => {
    return (
        <div>
            <h1>Выберите источник:</h1>
            <nav>
                <ul>
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