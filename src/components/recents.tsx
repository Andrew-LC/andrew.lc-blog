import { getAllPosts } from "../../lib/api";
import Link from "next/link";
import { metaData } from "../types";


export default function Recents() {
    //@ts-ignore
    const res: Partial<metaData[]> = getAllPosts([
        'title',
        'date',
        'slug',
    ] as metaData)
    return (
        <div className="flex flex-col gap-2 mt-6">
            <h2 className="text-font-color dark:text-dark-font text-font-color dark:text-dark-font font-semibold text-2xl mb-2"># Recents</h2>
            <div className="flex flex-col gap-4 lg:block ">
                {
                    res.slice(0, 3).map((article, index) => {
                        return (
                            <div key={index} className="flex flex-col text-sm lg:block lg:text-lg lg:gap-1" >
                                <span className="date mr-3 text-[#625757]">{article!.date}</span>
                                <Link href={`/post/${article!.slug}`}>
                                    <span
                                        className="text-black dark:text-dark-font volkh-font opacity-[.9] dark:opacity-[1] text-[1.1rem] lg:text-[1.2rem] hover:underline cursor-pointer">
                                        {article!.title}
                                    </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}

