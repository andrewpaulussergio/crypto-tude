import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// function to format currency in USD
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// function to format large numbers with suffixes (Million, Billion)
export const formatMarketCap = (cap: number) => {
  if(cap >= 1_000_000_000) {
    return `${(cap / 1_000_000_000).toFixed(2)}B`;
  }
  if(cap >= 1_000_000) {
    return `${(cap / 1_000_000).toFixed(2)}M`;
  }
  return cap.toString();
}
