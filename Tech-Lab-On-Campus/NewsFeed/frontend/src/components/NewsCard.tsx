import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function NewsCard({ article }: NewsCardProps) {
    // PART 2: Create a reusable news card to use with general stories

    // Similar to Part 1, create a component that displays:
    // 1. The article's image
    // 2. The article's title,
    // 3. A truncated version of the article's body

    // This component should be reusable to populate all stories on the news page.

    // Once completing this part, you should be able to see a few test articles on
    // the right side of the screen.

    // Hint: Some classes in `globals.css` could help with styling

    return (
        <Link href={article.url} target="_blank">

        <div className="news-card">
            <div className="news-info">
                {/* TODO: Remove the span below and implement a reusable NewsCard */}
                <span className='instruction'>{article.title}</span>
                <h1>{article.author} </h1>

                <img src={article.image_url} />
                <p className="truncate-text">{article.body.slice(0, 30)}</p>
            </div>
        </div>
        </Link>
    );
}

export default NewsCard;
