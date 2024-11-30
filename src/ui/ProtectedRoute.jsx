import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSession } from "../hooks/useSession"

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const { activeUser } = useSession()

  useEffect(() => {
    if (!activeUser) {
      navigate("/login", { replace: true })
    }
  }, [navigate, activeUser])

  return children
}

export default ProtectedRoute
