import { useQuery } from "@tanstack/react-query"
import { useSearchQuery } from "../contexts/SearchQueryContext"
import { searchDoctor as searchDoctorApi } from "../services/apiDoctors"

export function useSearchDoctor() {
  const { searchQuery } = useSearchQuery()

  const { data: searchResults = [], isLoading: isSearching } = useQuery({
    queryKey: ["searchResults"],
    queryFn: () => searchDoctorApi(searchQuery),
  })

  return { searchResults, isSearching }
}
