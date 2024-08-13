import ListActionsCard from "@/components/list-actions-card"

export default function page() {
  return (
    <div className="pt-32">
      <ListActionsCard title="Lịch sử xem" is_library={false} is_history={true} is_follow={false} />
    </div>
  )
}
