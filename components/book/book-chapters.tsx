'use client'
import { Book } from "@/app/types"

type BookChaptersProps = {
  bookData: Book
}

export default function BookChapters({ bookData }: BookChaptersProps) {
  if (!bookData || !bookData.chapters) return null
  return (
    <div className="mt-2 py-2 px-4 bg-gray-700">
      <label htmlFor="chapter" className="text-white">Các chương</label>
      <div className="text-white mt-2">
        {bookData.chapters?.map((chapterGroup, index) => (
          <div key={index} className="mb-2">
            {chapterGroup.server_data.map((chapter, chapterIndex) => (
              <div key={chapterIndex}>
                {chapter.chapter_name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
