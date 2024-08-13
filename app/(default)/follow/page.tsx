import ListActionsCard from "@/components/list-actions-card"

export default function page() {
  return (
    <div className="pt-32">
      <ListActionsCard title="Yêu thích" is_library={false} is_history={false} is_follow={true} />
    </div>
  )
}
