export interface BadgeProps {
  name: string
}

export const Badge = (props: BadgeProps) => {
  const { name } = props

  return <span className="badge">{name}</span>
}
