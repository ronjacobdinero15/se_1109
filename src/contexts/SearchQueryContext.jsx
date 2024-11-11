import { createContext, useContext, useState } from "react"

const SearchQueryContext = createContext()

function SearchQueryProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  )
}

function useSearchQuery() {
  const context = useContext(SearchQueryContext)
  if (!context)
    throw new Error("useSearchQuery must be within a SearchQueryProvider")
  return context
}

export { SearchQueryProvider, useSearchQuery }
