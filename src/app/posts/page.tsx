import { getAllPosts } from "../../../lib/api";
import { metaData } from "../../types";
import Link from "next/link";

export default function Posts() {
    //@ts-ignore
    const res: Partial<metaData[]> = getAllPosts([
        'title',
        'date',
        'slug',
    ] as metaData)
    return (
        <div className="lg:w-[740px] flex-1 mx-auto pt-20 p-4">
            <h2 className="flex items-center gap-1 text-font-color dark:text-dark-font text-font-color dark:text-dark-font font-semibold text-4xl mb-2">
                <i className='bx bx-leaf'></i>
                All Posts
            </h2>
            <div className="w-full dark:bg-[#363b3d] h-[.5px] bg-[#E3DCDC] mt-6 mb-6" />
            <div className="flex flex-col gap-4 lg:block ">
                {
                    res.map((article, index) => {
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
        </div>
    );
}

