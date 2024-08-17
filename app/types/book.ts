import { Category } from "@/app/types/category"
import { Chapter } from "@/app/types/chapter"
export type Book = {
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
        server_data: {
            filename: string
            chapter_name: string
            chapter_title: string
            chapter_api_data: string
        }[]
    }[]
    updatedAt: string,
    chaptersLatest: Chapter[]
}
