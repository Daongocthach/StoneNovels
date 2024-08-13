import Top5Books from "@/components/books-library/top5-books"
import ListActionsCard from "@/components/list-actions-card"
export default function page() {
  return (
    <>
      <Top5Books />
      <ListActionsCard title="Sách của bạn" is_library={true} is_history={false} is_follow={false}/>
    </>
  )
}
