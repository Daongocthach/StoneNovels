import { Suspense } from "react";
import Loading from "@/components/loading";
import BookList from "@/components/book/book-list";

export const metadata = {
  title: 'Quản lý sách',
  description: 'Trang quản lý sách',
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <section className="pt-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Quản lý sách</h1>
          <BookList /> {/* Sử dụng component BookList */}
        </div>
      </section>
    </Suspense>
  );
}
