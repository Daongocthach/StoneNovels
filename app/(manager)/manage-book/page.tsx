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
      <section className="pt-2">
        <div>
          <BookList />
        </div>
      </section>
    </Suspense>
  );
}
