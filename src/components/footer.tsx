import Socials from "./socials";

export default function Footer() {
    return (
        <footer className="bg-light-header dark:bg-dark-header text-font-color dark:text-dark-font w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly bg-[#f5f5f4] p-4 text-regular">
            <span>Copyright &#169; 2023 | All rights reserved.</span>
            <Socials />
        </footer>
    );
}
