import { Category } from "@/app/types/category"
import { Chapter } from "@/app/types/chapter"
export type Book = {
    id?: string
    _id: string
    name: string
    slug: string
    origin_name: string[]
    content: string
    status: string
    thumb_url: string
    sub_docquyen: boolean
    author: string[]
    category: Category[]
    chapters: {
        server_name: string
        server_data: Chapter[]
    }[]
    updatedAt: string,
    chaptersLatest: Chapter[]
}
