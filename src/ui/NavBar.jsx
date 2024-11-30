import { BsClockHistory } from "react-icons/bs"
import { HiMiniPlus } from "react-icons/hi2"
import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"

import Logout from "../features/authentication/Logout"
import SearchQuery from "../features/doctors/SearchQuery"

function NavBar() {
  const navigate = useNavigate()

  return (
    <nav className="flex w-full justify-center pb-10">
      <div className="flex gap-10">
        <SearchQuery />

        <Button onClick={() => navigate("/registration")} style="submit">
          <HiMiniPlus />
        </Button>

        <Button as={Link} to="/history">
          <BsClockHistory /> <span>History</span>
        </Button>

        <Logout />
      </div>
    </nav>
  )
}

export default NavBar
