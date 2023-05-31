import { getPostBySlug } from "../../../lib/api"

export default function Post({ params }: { params: { slug: string } }) {
    const res = getPostBySlug(params.slug, [
        "title",
        "date",
        "content"
    ])
    return (
        <div className="flex-1 pt-24 pb-16 w-[740px] mx-auto">
            <h1 className="font-extrabold text-4xl mb-2">{res.title}</h1>
            <span className="text-stone-500 font-semibold">Posted on {res.date}</span>
            <div className="prose prose-lg prose-p:volkh-font prose-stone w-full max-w-none mt-5" dangerouslySetInnerHTML={{ __html: res.content }} />
        </div>
    );
}

