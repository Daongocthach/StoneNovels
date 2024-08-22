'use client'
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export default function Search() {
  const router = useRouter()
  const [keyWord, setKeyWord] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/books-search?keyword=${keyWord}`)
  }
  return (
    <div className="flex-row items-center gap-2 w-full flex">
      <form onSubmit={handleSubmit} className="flex flex-row items-center justify-end relative w-full ">
        <Input
          type="text"
          placeholder="Tìm kiếm từ khóa..."
          className="h-10 bg-slate-700 border-0"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <button type="submit" className="absolute right-1 rounded-full cursor-pointer text-gray">
          <MagnifyingGlassIcon className="w-5 h-5 " />
        </button>
      </form>
    </div>
  )
}