import { forwardRef } from "react"

const Input = forwardRef(({ style = "regular", ...props }, ref) => {
  const base =
    "box-border h-10 rounded-md border pl-2 transition-all focus:outline-none focus:ring"

  const styles = {
    regular: base,
    notAllowed: base + " cursor-not-allowed",
    searchNav: base + " w-[600px] pr-10",
  }

  return <input className={styles[style]} ref={ref} {...props} />
})

Input.displayName = "Input"

export default Input
