'use client';

import { Book, Chapter } from "@/app/types";
import AddChapterDialog from "@/components/book/add-chapter-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type BookChaptersProps = {
  bookData: Book;
  setBookData: (bookData: Book) => void;
};

export default function BookChapters({ bookData, setBookData }: BookChaptersProps) {
  if (!bookData || !bookData.chapters) return null;

  const handleDeleteChapter = (chapterToDelete: Chapter) => {
    if (chapterToDelete) {
      const updatedChapters = bookData.chapters.filter(
        (chapter) => chapter !== chapterToDelete
      );
      setBookData({
        ...bookData,
        chapters: updatedChapters,
      });
    }
  };

  return (
    <div className="mt-2 py-2 px-4 bg-gray-700 rounded-md">
      <div className="flex flex-row items-center justify-between">
        <label htmlFor="chapter" className="text-white">
          Các chương
        </label>
        <AddChapterDialog bookData={bookData} setBookData={setBookData} />
      </div>
      <div className="text-white mt-2 space-y-2">
        {bookData.chapters?.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className="flex items-center justify-between">
            <span>{chapterIndex + 1 + ". " + chapter.chapter_name}</span>
            <Dialog>
              <DialogTrigger>
                <div className="ml-2 p-2 bg-red-500 text-white rounded cursor-pointer">
                  Xóa
                </div>
              </DialogTrigger>
              <DialogContent className="bg-gray-800">
                <DialogHeader>
                  <DialogTitle>Xóa Chương</DialogTitle>
                  <DialogDescription>
                    Bạn có chắc muốn xóa chương này? Hành động này không thể hoàn
                    tác.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    type="button"
                    className="bg-gray-700"
                    onClick={() => handleDeleteChapter(chapter)}
                  >
                    Xóa
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
