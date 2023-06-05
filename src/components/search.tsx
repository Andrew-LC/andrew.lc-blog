"use client"
import React, { useState, useEffect } from "react";
import { search } from "../../lib/fuse";
import Link from "next/link";

interface Post {
    item: {
        date: string;
        slug: string;
        title: string;
    };
}

interface SearchProps {
    data: Post[];
}

export default function Search({ data }: SearchProps) {
    const [temp, setTemp] = useState("");
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        console.log(posts[0]?.item?.title);
    }, [posts]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setTemp(value);
        //@ts-ignore
        const values = search(value, data);
        //@ts-ignore
        setPosts(values);
    };

    return (
        <div>
            <input
                onChange={handleChange}
                placeholder="Search Post"
                className="w-full p-2 outline-none border-2 border-font-color rounded-md"
            />
            <div className="mt-6 flex flex-col gap-2">
                {posts.map((article, index) => (
                    <div key={index} className="flex flex-col text-sm lg:block lg:text-lg lg:gap-1">
                        <span className="date mr-3 text-[#625757]">{article.item.date}</span>
                        <Link href={`/post/${article.item.slug}`}>
                            <span className="text-black dark:text-dark-font volkh-font opacity-[.9] dark:opacity-[1] text-[1.1rem] lg:text-[1.2rem] hover:underline cursor-pointer">
                                {article.item.title}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
