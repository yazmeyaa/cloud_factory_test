import { FC } from "react"
import './style.scss'
import { FormattedTickers, PoloniexAdapterResultType } from "helpers/poloniexDataAdapter"

export type QuoteTableProps = {
    quotes: PoloniexAdapterResultType
    onRowClick?: (quote: FormattedTickers) => void
}

export const QuoteTable: FC<QuoteTableProps> = ({ quotes, onRowClick }) => {
    const columnsMap = {
        displayName: "Название актива",
        last: "Цена последней сделки",
        highestBid: "Самая высокая цена продажи",
        percentChange: "Процент изменения цены"
    } as const

    const columnsKeys = Object.keys(columnsMap)
    const columns = Object.values(columnsMap)
    console.log(quotes)
    function handleRowClick(quote: FormattedTickers) {
        onRowClick?.(quote)
    }

    return (
        <div className="quote_table_container">
            <table className="quote_table">
                <thead>
                    <tr>
                        {columns.map((col, idx) => {
                            return(
                                <th key={idx}>{col}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                        {quotes.map((row, rowIdx) => {
                            return(
                                <tr onClick={() => handleRowClick(row)} key={rowIdx}> {columnsKeys.map((item, colIdx) => {
                                    const key = item as keyof typeof row
                                    return (
                                        <td key={`${rowIdx}:${colIdx}`}>{row[key]}</td>
                                    )
                                })} </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}