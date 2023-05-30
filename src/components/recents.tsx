const articles = [
    {
        date: "30-05-2023",
        title: "Article 1"
    },
    {
        date: "30-05-2023",
        title: "Article 2"
    },
    {
        date: "30-05-2023",
        title: "Article 3"
    }
]

export default function Recents() {
    return (
        <div className="flex flex-col gap-2 mt-6">
            <h2 className="font-bold text-2xl mb-2"># Recents</h2>
            <div>
                {
                    articles.map((article, index) => {
                        return (
                            <div key={index} className="text-lg">
                                <span className="mr-3 font-bold text-[#625757]">{article.date}</span>
                                <span className="volkh-font text-black text-[1.2rem] hover:underline cursor-pointer">{article.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

