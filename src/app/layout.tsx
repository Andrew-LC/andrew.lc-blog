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
        <html lang="en" className="light">
            <head>
                <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" defer></Script>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </head>
            <body className="w-full h-screen dark:bg-[#181a1b] dark:text-[rgb(192, 186, 178)] bg-white flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
