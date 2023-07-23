import { FC, memo, useEffect, useRef, useState } from "react"
import './style.scss'
import { FormattedTickers, PoloniexAdapterResultType } from "helpers/poloniexDataAdapter"
import { isEqual } from 'lodash'

export type QuoteTableProps = {
    quotes: PoloniexAdapterResultType
    onRowClick?: (quote: FormattedTickers) => void
}

function isEqualByColumns(obj1: any, obj2: any, keys: string[]) {
    for (const key of keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

const QuoteTable: FC<QuoteTableProps> = ({ quotes, onRowClick }) => {
    const prevQuotes = useRef<PoloniexAdapterResultType>(quotes)
    const [changedRows, setChangedRows] = useState<number[]>([]);

    const columnsMap = {
        displayName: "Название актива",
        last: "Цена последней сделки",
        highestBid: "Самая высокая цена продажи",
        percentChange: "Процент изменения цены"
    } as const



    const columnsKeys = Object.keys(columnsMap)
    const columns = Object.values(columnsMap)
    function handleRowClick(quote: FormattedTickers) {
        onRowClick?.(quote)
    }

    const handleAnimationEnd = (rowIdx: number) => {
        setChangedRows((prevChangedRows) => prevChangedRows.filter((idx) => idx !== rowIdx));
    };

    useEffect(() => {
        const updatedRows: number[] = [];
        for (let i = 0; i < quotes.length - 1; i++) {
            if (!isEqualByColumns(quotes[i], prevQuotes.current[i], columnsKeys)) {
                updatedRows.push(i);
            }
        }
        setChangedRows(updatedRows);
        prevQuotes.current = quotes;
        // eslint-disable-next-line
    }, [quotes]);

    return (
        <div className="quote_table_container">
            <table className="quote_table">
                <thead>
                    <tr>
                        {columns.map((col, idx) => {
                            return (
                                <th key={idx}>{col}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((row, rowIdx) => {
                        const isRowChanged = changedRows.includes(rowIdx);
                        return (
                            <tr
                                className={isRowChanged ? 'has_changes' : undefined}
                                onClick={() => handleRowClick(row)}
                                key={rowIdx}
                                onAnimationEnd={() => handleAnimationEnd(rowIdx)}
                            >
                                {columnsKeys.map((item, colIdx) => {
                                    const key = item as keyof typeof row;
                                    return <td key={`${rowIdx}:${colIdx}`}>{key === 'percentChange' ? `${parseFloat(row[key])}%` : row[key]}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

const memoisedComponent = memo(QuoteTable, (prev, next) => {
    if (prev.quotes.length !== next.quotes.length) {
        return false; // If the lengths of quotes arrays are different, re-render the component.
    }
    let isDifferentArrays = false
    for (let i = 0; i <= prev.quotes.length - 1; i++) {
        if (isEqual(prev.quotes[i], next.quotes[i]) === false) {
            isDifferentArrays = true
            break;
        }
    }
    return !isDifferentArrays
})

export { memoisedComponent as QuoteTable }