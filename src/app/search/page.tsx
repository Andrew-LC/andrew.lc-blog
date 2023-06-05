import { getAllPosts } from "../../../lib/api";
import { metaData } from "../../types";
import Search from "../../components/search";


export default function Post() {
    //@ts-ignore
    const res: Partial<metaData[]> = getAllPosts([
        'title',
        'date',
        'slug',
    ] as metaData)
    return (
        <div className="flex-1 pt-24 pb-16 w-full pr-6 pl-6 lg:pr-0 lg:pl-0 lg:w-[740px] mx-auto">
            <h1 className="dark:text-dark-font text-font-color font-extrabold tracking-tight text-3xl lg:text-4xl mb-2">Search</h1>
            <Search data={res} />
        </div>
    );
}

