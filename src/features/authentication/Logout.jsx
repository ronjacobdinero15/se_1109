import toast from "react-hot-toast"
import { HiArrowRightStartOnRectangle } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import Button from "../../ui/Button"

function Logout() {
  const navigate = useNavigate()

  function handleLogout() {
    sessionStorage.removeItem("current_user")
    toast.success("Logout successfully")
    navigate("/login")
  }

  return (
    <Button onClick={handleLogout}>
      <HiArrowRightStartOnRectangle /> <span>Logout</span>
    </Button>
  )
}

export default Logout
