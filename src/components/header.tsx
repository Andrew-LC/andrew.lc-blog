"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [theme, setTheme] = useState<string>("light");

    const toggleTheme = () => {
        if (theme === "dark") {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
            localStorage.theme = 'light'
            setTheme("light");
        } else {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setTheme("dark");
        }
    }

    return (
        <header className="header w-full p-4 bg-light-header dark:bg-dark-header bg-[#f5f5f4] flex justify-center font-bold">
            <div className="w-full lg:w-[740px] flex items-center justify-between text-[#3E3636]">
                <Link href="/" className="dark:text-dark-font font-extrabold">andrew.lc</Link>
                <div className="lg:hidden cursor-pointer flex items-center gap-4 dark:text-dark-font" >
                    <i onClick={toggleTheme} className='bx bx-moon dark:text-dark-font' ></i>
                    <i className='bx bx-menu-alt-right text-2xl '></i>
                </div>
                <nav className="dark:text-dark-font hidden lg:flex items-center gap-5 cursor-pointer">
                    <a href="#">Posts</a>
                    <a href="#">Tags</a>
                    <i onClick={toggleTheme} className='bx bx-moon dark:text-dark-font' ></i>
                    <i className='bx bx-search-alt-2' ></i>
                </nav>
            </div>
        </header>
    );
}
