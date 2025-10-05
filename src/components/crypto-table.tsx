"use client";

import { Coin } from '@/types';
import { formatCurrency, formatMarketCap } from '@/lib/utils';
import Image from 'next/image';

interface CryptoTableProps {
    coins: Coin[];
    onRowClick: (coinId: string, coinName: string) => void;
    selectedCoinId: string | null;
}

export default function CryptoTable({ coins, onRowClick, selectedCoinId } : CryptoTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs text-slate-400 uppercase bg-slate-800">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-center">#</th>
                        <th scope="col" className="px-4 py-3">Coin</th>
                        <th scope="col" className="px-4 py-3 text-right">Price</th>
                        <th scope="col" className="px-4 py-3 text-right">24h %</th>
                        <th scope="col" className="px-4 py-3 text-right">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr
                            key={coin.id}
                            className={`border-b border-slate-700 hover:bg-slate-800 cursor-pointer ${selectedCoinId === coin.id ? 'bg-slate-800' : 'bg-slate-900'}`}
                            onClick={() => onRowClick(coin.id, coin.name)}
                        >
                            <td className="px-4 py-4 text-center">{coin.market_cap_rank}</td>
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <Image src={coin.image} alt={coin.name} width={24} height={24} />
                                    <span>{coin.name}</span>
                                    <span className="text-slate-400 uppercase">{coin.symbol}</span>
                                </div>
                            </th>
                            <td className="px-6 py-4 text-right">{formatCurrency(coin.current_price)}</td>
                            <td className={`px-6 py-4 text-right ${coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </td>
                            <td className="px-6 py-4 text-right">{formatMarketCap(coin.market_cap)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}