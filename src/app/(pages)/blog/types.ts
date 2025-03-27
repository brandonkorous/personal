export interface Article {
        title: string
        excerpt: string
        content: string
        date: string
        readTime?: string
        category?: string
        slug: string
        image: string
        tags?: string[]
        author: Author
}

export interface Author {
    name: string
    role: string
    image?: string
    bio?: string
    initials?: string
}

export interface Comment {
    id: string
    author: {
        name: string
        image?: string
    }
    content: string
    date: string
    replies?: Comment[]
}

export interface ArticleBlurb {
    title: string
    excerpt: string
    category: string
    date: string
    image: string
    slug: string
    tags?: string[]
}

export interface BlogArticleProps {
    article: Article
    comments?: Comment[]
    relatedPosts?: ArticleBlurb[]
    onShare?: () => void
    onBookmark?: () => void
    slug: string
}