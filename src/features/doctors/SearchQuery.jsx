import { useEffect, useState } from "react"
import Button from "../../ui/Button"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { useSearchQuery } from "../../contexts/SearchQueryContext"
import Input from "../../ui/Input"
import Form from "../../ui/Form"

function SearchQuery() {
  const { setSearchQuery } = useSearchQuery()
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    if (!searchInput) {
      setSearchQuery("")
    }
  }, [searchInput, setSearchQuery])

  function handleSearch(e) {
    e.preventDefault()

    setSearchQuery(searchInput)
  }

  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        style="searchNav"
        placeholder="Search doctors"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button type="submit" style="search">
        <HiMagnifyingGlass />
      </Button>
    </Form>
  )
}

export default SearchQuery
