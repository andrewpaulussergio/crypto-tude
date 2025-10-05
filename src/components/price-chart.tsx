"use client";

import { useQuery } from '@tanstack/react-query';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getHistoricalChartData } from '@/lib/api';
import { useMemo } from 'react';

type CustomTooltipProps = {
    active?: boolean;
    payload?: {
        value: number;
    }[];
    label?: number;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if(active && payload && payload.length) {
        return (
            <div className='p-2 bg-slate-900 border border-slate-700 rounded-lg shadow-lg'>
                <p className='text-sm text-white'>{new Date(label || 0).toLocaleDateString()}</p>
                <p className='text-sm font-bold text-cyan-500'>{`Price: $${payload[0].value.toFixed(2)}`}</p>
            </div>
        )
    }
    return null
}

export default function PriceChart({ coinId, coinName }: { coinId: string | null, coinName: string | null}) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['chartData', coinId],
        queryFn: () => getHistoricalChartData(coinId!),
        enabled: !!coinId
    })

    const formattedData = useMemo(() => {
        return data?.prices.map(([timeStamp, price]) => ({
            timeStamp,
            price: price,
        })) || []
    }, [data])

    if(!coinId) {
        return (
            <div className="flex items-center justify-center h-full text-slate-500">
                Select a coin to view its price chart
            </div>
        )
    }

    if(isLoading) return <div>Loading Chart...</div>
    if(isError) return <div>Error loading chart data.</div>

    return (
        <>
            <h3 className="text-lg font-semibold mb-4 text-white">{coinName} - 7 Day Price Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={formattedData}>
                <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>                        
                </defs>
                <XAxis
                    dataKey="timeStamp"
                    tickFormatter={(time) => new Date(time).toLocaleDateString('en-US', { month: 'short', day: 'numeric'})}
                    stroke='#888888'
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    domain={['dataMin', 'dataMax']}
                    tickFormatter={(price) => `$${Number(price).toFixed(0)}`}
                    stroke='#888888'
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                />
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="price" stroke="06b6d4" fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}