import Link from "next/link";

export default function About() {
    return (
        <div className="lg:w-[740px] flex-1 mx-auto pt-20 p-4">
            <h2 className="flex items-center gap-1 text-font-color dark:text-dark-font text-font-color dark:text-dark-font font-semibold text-4xl mb-2">
                <i className='bx bxs-zap'></i>
                About
            </h2>
            <div className="w-full dark:bg-[#363b3d] h-[.5px] bg-[#E3DCDC] mt-6 mb-6" />
            <p className="text-[1.1rem] dark:text-dark-font">
                Hello 👋, I am <u className="decoration-wavy text-font-color dark:text-orange-200">Andrew Lamichhane</u>,
                this is a simple blog that I made to put out my learnings and ideas,
                they are not rudimentary and not just limited to programming,
                I wanted the website to look simple and without being distracted and just focus on my notes.
                <br /><br />
                The articles or blog notes are essentially my <Link className="underline decoration-wavy text-font-color dark:text-orange-200" href="https://orgmode.org/">emacs org notes</Link>,
                these are the main notes or ideas that I want to refer or reuse later in the future, and at the same time learn to blog in a sense.
            </p>
        </div>
    )
}

