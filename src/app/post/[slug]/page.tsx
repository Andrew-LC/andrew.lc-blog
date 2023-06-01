import { getPostBySlug } from "../../../../lib/api"
import { metaData } from "../../../types";


export default function Post({ params }: { params: { slug: string } }) {
    //@ts-ignore
    const res: Partial<metaData> = getPostBySlug(params.slug, [
        "title",
        "date",
        "cover_image",
        "content"
    ] as metaData) as Partial<metaData>
    return (
        <div className="flex-1 pt-24 pb-16 w-full pr-6 pl-6 lg:pr-0 lg:pl-0 lg:w-[740px] mx-auto">
            <h1 className="font-extrabold tracking-tight text-3xl lg:text-4xl mb-2">{res.title}</h1>
            <span className="text-stone-500 font-semibold mb-4">Posted on {res.date}</span>
            {res.cover_image ? <img className="mt-4 mb-4 w-full" src={`${res.cover_image}`} alt="cover" /> : ""}
            <div className="prose prose-lg prose-p:volkh-font prose-zinc max-w-none mt-5 opacity-1" dangerouslySetInnerHTML={{ __html: res.content as TrustedHTML }} />
        </div>
    );
}

