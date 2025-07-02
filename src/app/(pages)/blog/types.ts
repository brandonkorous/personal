export interface Article {
        title: string
        excerpt: string
        body: string
        content: string
        createdAt: string
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
    id: string
    title: string
    safeTitle: string
    intro: string
    category: string
    createdAt: string
    image: string
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