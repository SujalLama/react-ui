
export default function TabHeader({children, className}) {
  return (
    <ul className={`tab-header ${className || ''}`}>{children}</ul>
  )
}
