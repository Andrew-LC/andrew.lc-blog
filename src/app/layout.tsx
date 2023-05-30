import './globals.css'
import Header from "../components/header";
import Footer from "../components/footer";
import Script from 'next/script'

export const metadata = {
    title: 'Andrew Lamichhane',
    description: 'My Garden',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" defer></Script>
            </head>
            <body className="w-full h-screen bg-white flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
