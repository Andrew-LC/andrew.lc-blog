const links = {
    twitter: "https://twitter.com/azeus333",
    linkedin: "https://www.linkedin.com/in/andrew-lamichhane-34a397219/",
    github: "https://github.com/Andrew-LC"
}

export default function Socials() {
    return (
        <div className="flex gap-3 mt-4 cursor-pointer text-2xl">
            <a href={links.twitter}>
                <i className='bx bxl-twitter'></i>
            </a>
            <a href={links.linkedin}>
                <i className='bx bxl-linkedin-square' ></i>
            </a>
            <a href={links.github}>
                <i className='bx bxl-github' ></i>
            </a>
        </div>
    );
}
