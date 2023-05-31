import { getPostBySlug } from "../../../../lib/api"

interface metaData {
    slug: string;
    content: string;
    title: string;
    date: string,
    tags?: string
}

export default function Post({ params }: { params: { slug: string } }) {
    //@ts-ignore
    const res: Partial<metaData> = getPostBySlug(params.slug, [
        "title",
        "date",
        "content"
    ] as metaData) as Partial<metaData>
    return (
        <div className="flex-1 pt-24 pb-16 w-full p-4 lg:w-[740px] mx-auto">
            <h1 className="font-extrabold text-6xl mb-2">{res.title}</h1>
            <span className="text-stone-500 font-semibold">Posted on {res.date}</span>
            <div className="prose prose-lg prose-p:volkh-font prose-stone max-w-none mt-5" dangerouslySetInnerHTML={{ __html: res.content as TrustedHTML }} />
        </div>
    );
}

