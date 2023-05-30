const links = {
    twitter: "https://twitter.com/azeus333",
    linkedin: "https://www.linkedin.com/in/andrew-lamichhane-34a397219/",
    github: "https://github.com/Andrew-LC"
}

export default function Socials() {
    return (
        <div className="flex gap-3 mt-4 cursor-pointer">
            <a href={links.twitter}>
                <box-icon name='twitter' type='logo' color="#625757" ></box-icon>
            </a>
            <a href={links.linkedin}>
                <box-icon name='linkedin-square' type='logo' color="#625757" ></box-icon>
            </a>
            <a href={links.github}>
                <box-icon name='github' type='logo' color="#625757" ></box-icon>
            </a>
        </div>
    );
}
