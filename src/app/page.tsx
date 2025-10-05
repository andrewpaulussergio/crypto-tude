import { getTopCoins } from '@/lib/api';
import DashboardClient from './dashboard-client';

export default async function Home() {
    const initialCoins = await getTopCoins();

    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">CryptoTude Dashboard</h1>
                <p className="text-slate-400">Real-time cryptocurrency market data.</p>
            </header>

            <DashboardClient initialCoins={initialCoins} />
        </div>
    )
}