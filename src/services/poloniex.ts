import { Markets, TickersResponseType } from "types/poloniex"
import axios from 'axios'

const dataMap = {
    "id": "ID тикера",
    "last": "Последняя цена сделки",
    "lowestAsk": "Наименьшая цена покупки",
    "highestBid": "Наивысшая цена продажи",
    "percentChange": "Изменение цены %",
    "baseVolume": "Объем базовой валюты (за 24 часа)",
    "quoteVolume": "Объем котируемой валюты (за 24 часа)",
    "isFrozen": "Рынок заморожен",
    "postOnly": "Только размещение ордеров",
    "high24hr": "Наивысшая цена за 24 часа",
    "low24hr": "Наименьшая цена за 24 часа"
  }

export class Market {
    private path: string
    private root: PoloniexService

    constructor(root: PoloniexService) {
        this.root = root
        this.path = this.root.baseUrl + '/markets'
    }

    public async getTickers(): Promise<Markets[]> {
        const endpointPath = '/ticker24h'

        const url = this.path + endpointPath
        const response = await axios.get<Markets[]>(url, {
            method: 'GET'
        }) 
        return response.data
    }

    public async getTickerBySymbol(symbol: string): Promise<Markets> {
        const endpointPath = `/${symbol}/ticker24h`

        const url = this.path + endpointPath
        const response = await axios.get<Markets>(url, {
            method: 'GET'
        }) 
        return response.data
    }
}

export class Public {
    private root: PoloniexService
    private path: string

    constructor(root: PoloniexService) {
        this.root = root
        this.path = root.baseUrl + '/public'
    }

    public async getTickers(): Promise<TickersResponseType> {
        const command = 'returnTicker'
        const params = new URLSearchParams({
            command
        })
        const response = await axios.get<TickersResponseType>(this.path + '?' + params.toString(), {
            method: 'GET'
        })
        return response.data
    }
}

export class PoloniexService {
    baseUrl: string = 'https://api.poloniex.com'
    market: Market
    public: Public
    constructor() {
        this.market = new Market(this)
        this.public = new Public(this)
    }    
}

export const poloniexService = new PoloniexService()

export {dataMap as columnsMap}