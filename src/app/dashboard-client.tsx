"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Coin } from "@/types";
import { getTopCoins } from "@/lib/api";

import PriceChart from "@/components/price-chart";
import CryptoTable from "@/components/crypto-table";

interface DashboardClientProps {
    initialCoins: Coin[];
}

export default function DashboardClient({ initialCoins }: DashboardClientProps) {
    const [selectedCoin, setSelectedCoin] = useState<{ id: string; name: string} | null>(null);

    const { data: coins = [] } = useQuery({
        queryKey: ['topCoins'],
        queryFn: getTopCoins,
        initialData: initialCoins,
        refetchInterval: 30000 // 30 seconds
    })

    const handleRowClick = (coinId: string, coinName: string) => {
        setSelectedCoin({ id: coinId, name: coinName});
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-4 md:p-6">
                <CryptoTable
                    coins={coins}
                    onRowClick={handleRowClick}
                    selectedCoinId={selectedCoin?.id || null}
                />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 md:p-6">
                <PriceChart coinId={selectedCoin?.id || null} coinName={selectedCoin?.name || null} />
            </div>
        </div>
    )
}