"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [theme, setTheme] = useState<string>("light");
    const [menu, menuToggle] = useState<string>("none");

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

    const toggleMenu = () => {
        if (menu === "none") {
            menuToggle("flex")
        } else {
            menuToggle("none")
        }
    }

    return (
        <header className="header w-full p-4 bg-light-header dark:bg-dark-header bg-[#f5f5f4] flex justify-center font-bold">
            <div className="w-full lg:w-[740px] flex items-center justify-between text-[#3E3636]">
                <Link href="/" className="dark:text-dark-font font-extrabold">andrew.lc</Link>
                <div className="lg:hidden flex items-center gap-4 dark:text-dark-font" >
                    <div style={{ "display": `${menu}` }} className="absolute w-[100px] z-[100] p-4 rounded-md right-2 top-12 shadow-md text-font-color border-[.7px] border-dark-header dark:border-light-header dark:text-dark-font border-1 border-white dark:bg-dark-header menu text-black flex flex-col items-center justify-center gap-4">
                        <Link href="/posts">Posts</Link>
                        <a href="#">Graph</a>
                    </div>
                    <i onClick={toggleTheme} className='bx bx-moon dark:text-dark-font cursor-pointer' ></i>
                    <i onClick={toggleMenu} className='bx bx-menu-alt-right text-2xl cursor-pointer z-[100]'></i>
                </div>
                <nav className="dark:text-dark-font hidden lg:flex items-center gap-5 cursor-pointer">
                    <Link href="/posts">Posts</Link>
                    <a href="#">Graph</a>
                    <i onClick={toggleTheme} className='bx bx-moon dark:text-dark-font' ></i>
                    <i className='bx bx-search-alt-2' ></i>
                </nav>
            </div>
        </header>
    );
}
