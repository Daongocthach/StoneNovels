import { Chapter } from "@/app/types/chapter"
export type CardBookModel = {
    name: string
    thumb_url: string
    slug: string
    updatedAt: string,
    chaptersLatest: Chapter[]
}