import { Route, Routes } from "react-router-dom"
import { About } from "pages/About"
import { Quotes } from "pages/Quotes/layout"
import { Poloniex } from "pages/Quotes/path/Poloniex"
import { Xeinolop } from "pages/Quotes/path/Xeinolop"
import { QuotesPage } from "pages/Quotes/page"

export const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<About />} />
            <Route path="quotes" element={<Quotes />}>
                <Route path="/quotes" element={<QuotesPage />}/>
                <Route path="/quotes/poloniex" element={<Poloniex />}/>
                <Route path="/quotes/xeinolop" element={<Xeinolop />}/>
            </Route>
        </Routes>
    )
}