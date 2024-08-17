'use client'
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export default function Search() {
  const router = useRouter()
  const [keyWord, setKeyWord] = useState("")

  const handleClick = () => {
    router.push(`/books-search?keyword=${keyWord}`)
  }
  return (
    <div className="flex-row items-center gap-2 w-full flex">
      <div className="flex flex-row items-center justify-end relative w-full ">
        <Input
          type="email"
          placeholder="Tìm kiếm từ khóa..."
          className="h-10 bg-slate-700 border-0"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <MagnifyingGlassIcon className="absolute w-7 h-7 right-1 rounded-full cursor-pointer text-gray"
          onClick={() => handleClick()} />
      </div>
    </div>
  )
}