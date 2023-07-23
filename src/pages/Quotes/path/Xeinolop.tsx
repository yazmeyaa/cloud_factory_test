import { useEffect, useState } from "react"
import { poloniexService } from "services/poloniex"
import { FormattedTickers, PoloniexAdapterResultType, poloniexDataAdapter } from "helpers/poloniexDataAdapter"
import { QuoteTable } from "components/quoteTable"
import { Modal } from "components/modal"
import { SingleQuoteTable } from "components/singleQuoteTable"
import { useLocation } from "react-router-dom"

export const Xeinolop = () => {
    const [data, setData] = useState<PoloniexAdapterResultType | null>()
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedQuote, setSelectedQuote] = useState<FormattedTickers | null>(null)
    const [openModal, setOpenModal] = useState(false)
    const {pathname} = useLocation()
    const domain = pathname === '/quotes/xeinolop' ? 'Xeinolop' : 'Poloniex'

    async function loadData() {
        poloniexService.public.getTickers()
            .then(res => {
                const data = poloniexDataAdapter(res)

                const arrayHalf = data.slice((data.length - 1) / 2, data.length - 1)
                setData(arrayHalf)
            })
            .catch(console.error)
    }

    function handleTableRowClick(quote: FormattedTickers) {
        setOpenModal(true)
        setSelectedQuote(quote)
    }

    function handleCloseModal() {
        setOpenModal(false)
        setSelectedQuote(null)
    }

    useEffect(() => {
        setLoading(true)
        loadData()
            .finally(() => {
                setLoading(false)
            })
    }, [])


    if (!data || (data && loading)) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <>
            <h1>Актуальные котировки от {domain}</h1>
            <QuoteTable quotes={data} onRowClick={handleTableRowClick} />
            {(selectedQuote && openModal) && <Modal heading={selectedQuote.displayName} onClose={handleCloseModal} >
                <SingleQuoteTable quote={selectedQuote} />
            </Modal>}

        </>
    )
}