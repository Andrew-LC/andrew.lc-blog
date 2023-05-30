import Socials from "./socials";

export default function Footer() {
    return (
        <header className="w-full flex flex-col lg:flex-row lg:justify-center items-center justify-evenly bg-[#f5f5f4] p-4 text-[20px] text-regular">
            <span>Copyright &#169; 2023 | All rights reserved.</span>
            <Socials />
        </header>
    );
}
