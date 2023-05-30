import './globals.css'
import Header from "../components/header";
import Footer from "../components/footer";

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
                <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            </head>
            <body className="w-full h-screen bg-white flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
