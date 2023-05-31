import { getAllPosts } from "../../lib/api";
import Link from "next/link";

interface metaData {
    slug: string;
    content: string;
    title: string;
    date: string,
    tags?: string
}

export default function Recents() {
    //@ts-ignore
    const res: Partial<metaData[]> = getAllPosts([
        'title',
        'date',
        'slug',
    ] as metaData)
    return (
        <div className="flex flex-col gap-2 mt-6">
            <h2 className="font-bold text-2xl mb-2"># Recents</h2>
            <div>
                {
                    res.map((article, index) => {
                        return (
                            <div key={index} className="text-lg" >
                                <span className="mr-3 font-bold text-[#625757]">{article!.date}</span>
                                <Link href={`/post/${article!.slug}`}>
                                    <span
                                        className="volkh-font text-black text-[1.2rem] hover:underline cursor-pointer">
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

