export default function Header() {
    return (
        <header className="w-full p-4 bg-[#f5f5f4] flex justify-center font-bold">
            <div className="w-full lg:w-[740px] flex items-center justify-between text-xl text-[#3E3636]">
                <a href="#" className="font-extrabold">andrew.lc</a>
                <div className="lg:hidden cursor-pointer" >
                    <box-icon name='menu-alt-right'></box-icon>
                </div>
                <nav className="hidden lg:flex items-center gap-5 cursor-pointer">
                    <a href="#">Posts</a>
                    <a href="#">Tags</a>
                    <box-icon name='moon' size="sm"></box-icon>
                    <box-icon name='search-alt-2' ></box-icon>
                </nav>
            </div>
        </header>
    );
}
