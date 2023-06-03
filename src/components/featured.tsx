import { getAllFeatured } from "../../lib/api";
import Link from "next/link";
import { metaData } from "../types";


export default function Featured() {
    //@ts-ignore
    const res: Partial<metaData[]> = getAllFeatured([
        "title",
        "date",
        "slug",
        "tags"
    ] as Partial<metaData>) as Partial<metaData[]>
    return (
        <div className="flex flex-col gap-2 mt-6">
            <h2 className="text-font-color dark:text-dark-font font-bold text-2xl mb-2"># Featured</h2>
            <div className="flex flex-col gap-4 lg:block ">
                {
                    res.map((article, index) => {
                        return (
                            <div key={index} className="flex flex-col text-sm lg:block lg:text-lg lg:gap-1">
                                <span className="mr-3 text-regular text-[#625757]">{article!.date}</span>
                                <Link href={`/post/${article!.slug}`}>
                                    <span className="text-black dark:text-dark-font volkh-font opacity-[.9] dark:opacity-1  text-[1.1rem] lg:text-[1.2rem] hover:underline cursor-pointer">{article!.title}</span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}

