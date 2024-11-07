import React from 'react'
import { Book } from '@/app/types'

type AddBasicInformationProps = {
  bookData: Book
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

function AddBasicInformation({ bookData, handleInputChange } : AddBasicInformationProps) {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-white">
          <span className="text-red-500">*</span> Tiêu đề sách
        </label>
        <input type="text" id="name" name="name" value={bookData.name} onChange={handleInputChange}
          required className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-white">
          <span className="text-red-500">*</span> Tác giả
        </label>
        <input type="text" id="author" name="author" value={bookData.author} onChange={handleInputChange}
          required className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-white">
          <span className="text-red-500">*</span> Mô tả
        </label>
        <textarea id="content" name="content" value={bookData.content} onChange={handleInputChange}
          required className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black" />
      </div>
    </div >
  )
}

export default AddBasicInformation