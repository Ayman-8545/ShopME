export default function Icon({ name, fill = false, className = '', style = {} }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      data-weight={fill ? 'fill' : undefined}
      style={style}
    >
      {name}
    </span>
  )
}
