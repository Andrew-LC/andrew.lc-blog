const links = {
    twitter: "https://twitter.com/azeus333",
    linkedin: "https://www.linkedin.com/in/andrew-lamichhane-34a397219/",
    github: "https://github.com/Andrew-LC"
}

export default function Socials() {
    return (
        <div className="flex gap-3 mt-4 text-2xl">
            <a href={links.twitter} className="cursor-pointer">
                <i className='bx bxl-twitter text-[#44403C] dark:text-dark-font'></i>
            </a>
            <a href={links.linkedin} className="cursor-pointer">
                <i className='bx bxl-linkedin-square text-[#44403C] dark:text-dark-font' ></i>
            </a>
            <a href={links.github} className="cursor-pointer">
                <i className='bx bxl-github text-[#44403C] dark:text-dark-font' ></i>
            </a>
        </div>
    );
}
