import { Outlet, useLocation } from "react-router-dom"

export const Quotes = () => {
    const {pathname} = useLocation()
    const domain = pathname === '/quotes/xeinolop' ? 'Xeinolop' : 'Poloniex'
    return(
        <>
            <h1>Актуальные котировки валют от {domain}</h1>
            <Outlet />
        </>
    )
}