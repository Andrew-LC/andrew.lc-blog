export default function Header() {
    return (
        <header className="w-full p-4 bg-[#f5f5f4] flex justify-center font-bold">
            <div className="w-full lg:w-[740px] flex items-center justify-between text-xl text-[#3E3636]">
                <a href="#" className="font-extrabold">andrew.lc</a>
                <div className="lg:hidden cursor-pointer" >
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <nav className="hidden lg:flex items-center gap-5 cursor-pointer">
                    <a href="#">Posts</a>
                    <a href="#">Tags</a>
                    <i className='bx bx-moon' ></i>
                    <i className='bx bx-search-alt-2' ></i>
                </nav>
            </div>
        </header>
    );
}
