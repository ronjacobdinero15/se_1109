import { useEffect, useRef } from "react"

export function useInputFocus() {
  const inputFocusRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputFocusRef.current) {
        inputFocusRef.current.focus()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return { inputFocusRef }
}

/* export function useInputFocus() {
  const inputFocusRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputFocusRef.current) {
        console.log("Attempting to focus:", inputFocusRef.current)
        inputFocusRef.current.focus()

        // Additional check
        if (document.activeElement !== inputFocusRef.current) {
          console.warn("Focus attempt failed")
        }
      } else {
        console.warn("No current ref found")
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return { inputFocusRef }
} */
