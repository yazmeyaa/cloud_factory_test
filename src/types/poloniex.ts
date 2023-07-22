export type Markets = {
    symbol: string
    open: string
    low: string
    high: string
    close: string
    quantity: string
    amount: string
    tradeCount: number
    startTime: number
    closeTime: number
    displayName: string
    dailyChange: string
    bid: string
    bidQuantity: string
    ask: string
    askQuantity: string
    ts: number
    markPrice: string
}

export type Tickers = {
    id: number
    last: string
    lowestAsk: string
    highestBid: string
    percentChange: string
    baseVolume: string
    isFrozen: string
    postOnly: string
    hight24hr: string
    low24hr: string
}

export type TickersResponseType = Record<string, Tickers>