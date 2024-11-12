function Button({
  children,
  onClick,
  style = "regular",
  type = "button",
  disabled,
}) {
  const base =
    "flex items-center justify-center gap-2 px-4 transition-colors rounded-md h-10 focus:outline-none focus:ring"

  const styles = {
    regular: base,
    register: base + " bg-green-500 text-stone-50 hover:bg-green-600",
    reset: base + " border",
    navigateBack: base + " !pl-0 text-blue-500 hover:text-blue-600",
    search: "absolute right-3 -top-3 !focus:ring-none",
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
