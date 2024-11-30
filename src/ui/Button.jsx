import { Link } from "react-router-dom"

function Button({
  children,
  onClick,
  style = "regular",
  type = "button",
  disabled,
  as,
  to,
}) {
  const base =
    "flex items-center justify-center gap-2 px-3 transition-colors rounded-md h-10 focus:outline-none focus:ring [&_svg]:size-6 focus:ring-inset"

  const styles = {
    regular: base,
    submit: base + " bg-green-500 text-stone-50 hover:bg-green-600",
    reset: base + " border",
    navigateBack: base + " !pl-0 text-blue-500 hover:text-blue-600",
    link: base + " text-blue-500 hover:text-blue-600",
    search: base + " absolute right-0 -top-5",
  }

  if (as) {
    return (
      <Link className={styles[style]} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={styles[style]}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
