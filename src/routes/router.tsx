import { Route, Routes } from "react-router-dom"
import { About } from "pages/About"
import { Quotes } from "pages/Quotes"
import { Poloniex } from "pages/Poloniex"
import { Xeinolop } from "pages/Xeinolop"

export const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<About />} />
            <Route path="quotes" element={<Quotes />}>
                <Route path="/quotes/poloniex" element={<Poloniex />}/>
                <Route path="/quotes/xeinolop" element={<Xeinolop />}/>
            </Route>
        </Routes>
    )
}