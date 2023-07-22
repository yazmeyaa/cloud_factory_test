import { useEffect, useRef, useState } from "react"
import { poloniexService } from "services/poloniex"
import { FormattedTickers, PoloniexAdapterResultType, poloniexDataAdapter } from "helpers/poloniexDataAdapter"
import { QuoteTable } from "components/quoteTable"
import { Modal } from "components/modal"
import { SingleQuoteTable } from "components/singleQuoteTable"

export const Poloniex = () => {
    const [data, setData] = useState<PoloniexAdapterResultType | null>()
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedQuote, setSelectedQuote] = useState<FormattedTickers | null>(null)
    const [openModal, setOpenModal] = useState(false)
    const timerRef = useRef<NodeJS.Timer | null>(null)

    async function loadData() {
        poloniexService.public.getTickers()
            .then(res => {
                const data = poloniexDataAdapter(res)

                const arrayHalf = data.slice(0, (data.length - 1) / 2)
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
            });
        
        timerRef.current = setInterval(() => {
            loadData()
        }, 1000)
        return () => clearInterval(timerRef.current!)
    }, [])


    if (!data || (data && loading)) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <>
            <QuoteTable quotes={data} onRowClick={handleTableRowClick} />
            {(selectedQuote && openModal) && <Modal heading={selectedQuote.displayName} onClose={handleCloseModal} >
                <SingleQuoteTable quote={selectedQuote} />
            </Modal>}

        </>
    )
}