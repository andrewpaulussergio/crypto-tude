import { Coin, HistoricalChartData } from '@/types';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const getTopCoins = async (): Promise<Coin[]> => {
    const url = `${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 60 } //revalidate cache every 60 seconds
        })

        if(!response.ok) {
            throw new Error('Failed to fetch coin data from CoinGecko API');
        }

        const data: Coin[] = await response.json();
        return data;
    }
    catch (error) {
        console.error(error)
        return [];
    }
}

export const getHistoricalChartData = async (coinId: string): Promise<HistoricalChartData> => {
    const url = `${API_BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=7`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Failed to fetch chart data for ${coinId}`);
        }
        const data: HistoricalChartData = await response.json();
        return data;
    }
    catch (error) {
        console.error(error)
        return { prices: []};
    }
}