import { Tickers, TickersResponseType } from "types/poloniex";

export type FormattedTickers = Tickers & {displayName: string}

export type PoloniexAdapterResultType = FormattedTickers[]

export function poloniexDataAdapter(response: TickersResponseType): PoloniexAdapterResultType {

    const entries = Object.entries(response)

    const result: PoloniexAdapterResultType = []

    for(let i = 0; i <= entries.length - 1; i++){
        const [tickerName, values] = entries[i]
        const tempObj: FormattedTickers = {...values, displayName: tickerName}
        result.push(tempObj)
    }

    return result
}
