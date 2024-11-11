import { HiMagnifyingGlass, HiMiniPlus } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { useSearchQuery } from "../contexts/SearchQueryContext"
import Button from "./Button"
import Input from "./Input"
import { useQueryClient } from "@tanstack/react-query"

function NavBar() {
  const { searchQuery, setSearchQuery } = useSearchQuery()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return (
    <nav className="flex w-full justify-center">
      <div className="flex gap-10">
        <div className="relative">
          <Input
            type="text"
            style="searchNav"
            placeholder="Search doctors"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              queryClient.invalidateQueries({ queryKey: ["searchResults"] })
              queryClient.refetchQueries({ queryKey: ["searchResults"] })
            }}
          />
          <HiMagnifyingGlass className="absolute right-2 top-[6px] size-6" />
        </div>

        <Button onClick={() => navigate("/registration")} style="register">
          <span>Create new</span>
          <HiMiniPlus className="size-6" />
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
