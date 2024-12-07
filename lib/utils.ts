import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PDFDocument, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function convertTextToPdfFile(content: string, filename: string): Promise<File> {
  const pdfDoc = await PDFDocument.create()
  pdfDoc.registerFontkit(fontkit)

  const fontBytes = await fetch('/font/NotoSerif-VariableFont_wdth,wght.ttf').then(res => res.arrayBuffer())
  const customFont = await pdfDoc.embedFont(fontBytes)

  const fontSize = 12
  const pageWidth = 600
  const pageHeight = 800
  const textWidth = pageWidth - 40
  let yPosition = pageHeight - 40

  let page = pdfDoc.addPage([pageWidth, pageHeight])
  const textLines = content.split('\n')

  for (const line of textLines) {
    if (yPosition < 40) {
      page = pdfDoc.addPage([pageWidth, pageHeight])
      yPosition = pageHeight - 40
    }
    page.drawText(line, {
      x: 20,
      y: yPosition,
      size: fontSize,
      font: customFont,
      color: rgb(0, 0, 0),
      maxWidth: textWidth,
    })
    yPosition -= fontSize * 1.5
  }

  const pdfBytes = await pdfDoc.save()

  return new File([pdfBytes], filename || "bookContent.pdf", { type: "application/pdf" })
}

export function convertToSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // Normalize the text
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/đ/g, "d") // Replace 'đ' with 'd'
    .replace(/[^a-z0-9\s-]/g, "") // Remove invalid characters
    .trim() // Trim spaces at the start and end
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}