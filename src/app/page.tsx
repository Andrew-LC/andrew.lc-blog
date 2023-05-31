import Socials from "../components/socials";
import Featured from "../components/featured";
import Recents from "../components/recents";

export default function Home() {
    return (
        <main className="w-full flex-1 flex flex-col items-center pt-[4.5rem] lg:pt-24 pb-24">
            <div className="w-full p-5 lg:w-[740px]">
                <h1 className="font-extrabold break-words text-4xl">Hello! I am Andrew Lamichhane</h1>
                <span className="volkh-font text-[20px] mt-2 lg:text-[24px] lg:mt-1">This is my personal space to dump my ideas, a blog of sorts perhaps.</span>
                <Socials />
                <hr className="bg-[#E3DCDC] mt-6" />
                <Featured />
                <hr className="bg-[#E3DCDC] mt-6" />
                <Recents />
            </div>
        </main>
    )
}
