import { FC } from "react";
import { columnsMap } from "services/poloniex";
import { Tickers } from "types/poloniex";

export type SingleQuoteTableProps = {
    quote: Tickers
}
export const SingleQuoteTable: FC<SingleQuoteTableProps> = ({ quote }) => {
    return (
        <div>
            {Object.entries(quote).map(([key, value], idx) => {
                if(key === 'displayName') return null;
                return(
                    <div key={idx}>
                        <strong>{columnsMap[key as keyof typeof columnsMap]}: </strong>
                        <span>{value}</span>
                    </div>
                )
            })}
        </div>
    )
}