import { useEffect, useState } from "react"
import { HiMagnifyingGlass, HiMiniPlus } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { useSearchQuery } from "../contexts/SearchQueryContext"
import Button from "./Button"
import Form from "./Form"
import Input from "./Input"

function NavBar() {
  const { setSearchQuery } = useSearchQuery()
  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()

    setSearchQuery(searchInput)
  }

  useEffect(() => {
    if (!searchInput) {
      setSearchQuery("")
    }
  }, [searchInput, setSearchQuery])

  return (
    <nav className="flex w-full justify-center">
      <div className="flex gap-10">
        <Form onSubmit={handleSearch}>
          <Input
            type="text"
            style="searchNav"
            placeholder="Search doctors"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button type="submit" style="search">
            <HiMagnifyingGlass className="size-6" />
          </Button>
        </Form>

        <Button onClick={() => navigate("/registration")} style="register">
          <span>Create new</span>
          <HiMiniPlus className="size-6" />
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
