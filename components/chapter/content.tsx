'use client'
import React, { useState, useEffect, useRef } from 'react'
import { ChevronUpIcon, PlayIcon, PauseIcon, StopIcon } from "@radix-ui/react-icons"
import { useSearchParams } from 'next/navigation'
import ButtonChapter from '@/components/chapter/button-chapter'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

function Content() {
    const searchParams = useSearchParams()
    const chapter_api_data = searchParams.get('chapter_api_data')
    const book_name = searchParams.get('book_name')
    const id = searchParams.get('id')
    const chapter_name = searchParams.get('chapter_name')
    const [textContent, setTextContent] = useState<string>('Đang tải nội dung...')
    const [fontSize, setFontSize] = useState<number>(20)
    const [isSpeaking, setIsSpeaking] = useState<boolean>(false)
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const speechSynthesis = typeof window !== 'undefined' ? window.speechSynthesis : null

    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            utteranceRef.current = new SpeechSynthesisUtterance();
        }
    }, []);
    const increaseFontSize = () => setFontSize((prevSize) => Math.min(prevSize + 2, 50))
    const decreaseFontSize = () => setFontSize((prevSize) => Math.max(prevSize - 2, 10))
    const handleFontSizeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputSize = Number(event.target.value)
        if (inputSize >= 10 && inputSize <= 50) {
            setFontSize(inputSize)
        }
    }
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    const handleSpeak = (action?: 'play' | 'pause' | 'stop') => {
        const utterance = utteranceRef.current
        if (action === 'play') {
            if (!speechSynthesis?.speaking || speechSynthesis?.paused) {
                if (speechSynthesis?.paused) {
                    speechSynthesis.resume()
                } else {
                    if (utterance) {
                        utterance.text = textContent;
                        utterance.lang = 'vi-VN'
                        utterance.onboundary = (event: SpeechSynthesisEvent) => {
                            const wordIndex = textContent
                                .substring(0, event.charIndex)
                                .split(' ').length - 1
                            setHighlightedIndex(wordIndex)
                        }
                        utterance.onend = () => {
                            setIsSpeaking(false)
                            setHighlightedIndex(null)
                        }
                        speechSynthesis?.speak(utterance)
                    }
                }
                setIsSpeaking(true)
            }
        } else if (action === 'pause') {
            if (speechSynthesis?.speaking) {
                speechSynthesis.pause()
                setIsSpeaking(false)
            }
        } else if (action === 'stop') {
            if (speechSynthesis?.speaking) {
                speechSynthesis.cancel()
                setIsSpeaking(false)
                setHighlightedIndex(null)
            }
        }
    }

    useEffect(() => {
        const fetchAndReadPdf = async () => {
            if (!chapter_api_data) return
            else {
                setLoading(true)
                try {
                    const loadingTask = pdfjs.getDocument(chapter_api_data)
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
                finally {
                    setLoading(false)
                }
            }
        }
        fetchAndReadPdf()
    }, [chapter_api_data, chapter_name])

    const renderTextWithHighlight = () => {
        const words = textContent.split(' ')
        return words.map((word, index) => (
            <span
                key={index}
                className={index === highlightedIndex ? 'bg-gray-600 rounded-md p-1' : ''}
            >
                {word + ' '}
            </span>
        ))
    }

    return (
        <section>
            <div className='mt-2 px-2 flex flex-col items-center'>
                <p className="text-white text-xl font-bold block max-w-3xl mb-2 text-center">
                    {book_name || 'Loading...'}
                </p>
                <p className="text-gray-400 text-lg block max-w-3xl mb-2 text-center">
                    {((chapter_name || '1') || 'Loading...')}
                </p>
                <ButtonChapter
                    book_name={book_name ?? ''} id={id || ''} chapter_name={chapter_name || ''} />
                <hr className="bg-white max-w-6xl w-full mx-auto my-2" />
                <div className="flex flex-col items-center">
                    {loading ? <p className="text-white text-lg">Đang tải nội dung...</p> :
                        <div style={{ fontSize: `${fontSize}px` }}
                            className="text-justify leading-relaxed whitespace-pre-wrap">
                            {renderTextWithHighlight()}
                        </div>}
                </div>
                <hr className="bg-white max-w-6xl w-full mx-auto my-2" />
                <ButtonChapter
                    book_name={book_name ?? ''} id={id || ''} chapter_name={chapter_name || ''} />
                <div className='fixed top-1/2 right-5 flex flex-col items-center gap-2'>
                    <div className="flex items-center">
                        <button onClick={decreaseFontSize} className="px-2 mr-1 text-white rounded-md ">-</button>
                        <input type="number" value={fontSize} onChange={handleFontSizeInput}
                            min={16} max={50} className="w-14 h-7 bg-gray-600 text-white text-center rounded-md mr-1" />
                        <button onClick={increaseFontSize} className="px-2 text-white rounded-md">+</button>
                    </div>
                    <button className={`mt-2 px-3.5 py-1 text-white rounded-md 
                            ${isSpeaking ? 'bg-gray-500' : 'bg-red-600'}`}>
                        {isSpeaking ? (
                            <div className="flex flex-row items-center gap-2">
                                <PauseIcon
                                    className="h-4 w-4"
                                    onClick={() => handleSpeak('pause')}
                                />
                                <StopIcon
                                    className="h-4 w-4"
                                    onClick={() => handleSpeak('stop')}
                                />
                            </div>
                        ) : (
                            <PlayIcon
                                className="h-6 w-6"
                                onClick={() => handleSpeak('play')}
                            />
                        )}
                    </button>
                    <div className="bg-gray-700 rounded-full opacity-80 p-3 cursor-pointer">
                        <ChevronUpIcon
                            className="h-5 w-5 "
                            onClick={scrollToTop} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content
