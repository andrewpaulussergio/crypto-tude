CryptoTude: A Real-Time Crypto Analytics Dashboard
A high-performance, data-driven web application built with a modern, type-safe architecture to deliver real-time cryptocurrency market insights.

Navigate: <a href="https://crypto-tude.vercel.app/" target="_blank" rel="noopener noreferrer">🚀 Live Demo</a> | 🧠 [Architectural Highlights](#-architectural-highlights)

## Why This Project Matters

I built CryptoTude to showcase my ability to develop full-stack, data-intensive applications using the modern React ecosystem. This project is a demonstration of my expertise in:

Efficient Server State Management: Handling complex asynchronous data, caching, and real-time updates.

Interactive UI Development: Building responsive, data-driven interfaces that provide a seamless user experience.

Production-Ready Architecture: Architecting type-safe, performant, and maintainable applications from the ground up.

## 🛠️ Tech Stack

## ✨ Key Features

Real-Time Data Polling: The main dashboard automatically polls for new market data every 30 seconds, ensuring users always see the latest information.

Interactive Data Visualization: Users can click any cryptocurrency to instantly render a historical 7-day price chart, providing deeper market insight.

Optimized Initial Load (SSR): The application leverages Next.js Server Components to fetch initial data, delivering a fast, fully-rendered page for optimal performance and SEO.

Fully Responsive Interface: The layout is meticulously crafted to provide a first-class experience on any device, from small mobile screens to large desktops.

## 🧠 Architectural Highlights

Next.js App Router & Hybrid Rendering

Utilized Server Components for fast, SEO-friendly initial page loads and Client Components for rich, stateful interactivity. This hybrid approach combines the best of server-side and client-side rendering.

**Robust Server State Management**

Leveraged TanStack Query to handle all asynchronous data fetching, caching, and polling. This eliminated complex manual state management (useState/useEffect chains) and prevented redundant API calls, leading to a more performant and predictable application.

**End-to-End Type Safety**

Enforced a strict TypeScript configuration across the entire codebase. This guarantees type safety from the API data contracts to the individual component props, resulting in a bug-resistant, self-documenting, and highly maintainable application.

## Local Development

To run this project on your local machine:

Clone the repository:

Bash
git clone https://github.com/your-username/crypto-tude.git
cd crypto-tude
Install dependencies:
Bash
npm install @tanstack/react-query @tanstack/react-query-devtools recharts clsx tailwind-merge

Run the development server:
Bash
npm run dev
