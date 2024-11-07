'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { pdfjs } from 'react-pdf'
import { Suspense } from "react"
import Loading from "@/components/loading"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function ReadBook() {
    const [textContent, setTextContent] = useState<string>('Đang tải nội dung...')
    const [fontSize, setFontSize] = useState<number>(16)
    const searchParams = useSearchParams()
    const pdfUrl = searchParams.get('pdfUrl')

    useEffect(() => {
        const fetchAndReadPdf = async () => {
            if (pdfUrl) {
                try {
                    const loadingTask = pdfjs.getDocument(pdfUrl)
                    const pdf = await loadingTask.promise
                    let fullText = ''

                    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                        const page = await pdf.getPage(pageNumber)
                        const textContent = await page.getTextContent()
                        const textItems = textContent.items
                        const pageText = textItems.map((item: any) => item.str).join(' ')
                        fullText += pageText + '\n'
                    }

                    setTextContent(fullText)
                } catch (error) {
                    console.error('Error fetching or reading PDF:', error)
                    setTextContent('Lỗi khi tải nội dung.')
                }
            }
        }
        fetchAndReadPdf()
    }, [pdfUrl])

    const handleFontSizeChange = () => {
        setFontSize((prevSize) => (prevSize === 16 ? 20 : 16))
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Suspense fallback={<Loading />}>
            <section className="pt-40">
                <div className="p-4 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Đọc Sách</h2>
                    <button onClick={handleFontSizeChange} className="mb-4 p-2 bg-gray-500 text-white rounded-md">
                        Thay đổi kích thước chữ
                    </button>
                    <button onClick={scrollToTop} className="ml-4 mb-4 p-2 bg-gray-500 text-white rounded-md">
                        Lên đầu trang
                    </button>
                    <div style={{ fontSize: `${fontSize}px` }} className="leading-relaxed whitespace-pre-wrap">
                        {textContent}
                    </div>
                </div>
            </section>
        </Suspense>
    )
}
