export type NewsArticle = {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    detailImage?: string;
    publishedAt: string;
    author?: string;
    authorImage?: string;
    category?: string;
    tags?: string[];
    body?: string[];
    quote?: string;
    quoteAuthor?: string;
};
