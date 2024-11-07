'use client'
import { useState, ChangeEvent, FormEvent } from "react"
import { addBook } from "@/app/api/book-fire-api"
import { convertTextToPdfFile } from "@/lib/utils"
import { Chapter } from "@/app/types"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Book } from "@/app/types"

type AddChapterDialogProps = {
  bookData: Book
  setBookData: (bookData: Book) => void
}

export default function AddChapterDialog({ bookData, setBookData }: AddChapterDialogProps) {
  const [chapterName, setChapterName] = useState<string>("")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [isPdfSelected, setIsPdfSelected] = useState(true)
  const [content, setContent] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setPdfFile(file)
  }
  const handleSubmit = async () => {
    let file = pdfFile
    if (!chapterName.trim()) return
    if (!isPdfSelected && !pdfFile) {
      const contentToPdf = await convertTextToPdfFile(content)
      file = contentToPdf
    }
    const newChapter = {
      server_name: "New Server",
      server_data: [
        {
          chapter_name: chapterName,
          filename: file?.name || "",
          chapter_title: "",
          chapter_api_data: file
        }
      ]
    }
    const updatedBookData = {
      ...bookData,
      chapters: [...bookData.chapters, newChapter as unknown as { server_name: string; server_data: Chapter[] }]
    }
    setBookData(updatedBookData)
    setOpen(false)
  }
  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button variant="outline" >Thêm chương</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Thêm chương</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-white">
              <span className="text-red-500">*</span> Tên chương
            </label>
            <input type="text" id="title" name="title" value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
              required className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              <span className="text-red-500">*</span> Tải lên PDF hoặc nhập nội dung
            </label>
            <div className="flex items-center mt-2">
              <input type="radio" id="pdfOption" name="inputOption" checked={isPdfSelected}
                onChange={() => setIsPdfSelected(true)} />
              <label htmlFor="pdfOption" className="ml-2">Tải lên PDF</label>
              <input type="radio" id="textOption" name="inputOption" checked={!isPdfSelected} onChange={() => setIsPdfSelected(false)}
                className="ml-4" />
              <label htmlFor="textOption" className="ml-2">Nhập nội dung văn bản</label>
            </div>
          </div>
          {isPdfSelected ? (
            <div className="mb-4">
              <input type="file" id="pdf" accept=".pdf" onChange={handleFileChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
            </div>
          ) : (
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-white">Nội dung văn bản</label>
              <textarea id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}
                required className="mt-1 pt-2 pl-2 pr-2 pb-20 block w-full border border-gray-300 rounded-md text-black" />
            </div>
          )}
        </form>
        <DialogFooter>
          <Button className="bg-gray-800" onClick={() => handleSubmit()}>Thêm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}
