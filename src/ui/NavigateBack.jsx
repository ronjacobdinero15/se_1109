import { HiOutlineHome } from "react-icons/hi2"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

function NavigateBack({ disabled }) {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate("/")}
      style="navigateBack"
      disabled={disabled}
    >
      <HiOutlineHome />
      <span>Home</span>
    </Button>
  )
}

export default NavigateBack
