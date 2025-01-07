export default function Task({ title, description }: { title: string, description: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
