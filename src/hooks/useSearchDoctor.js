import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useSearchQuery } from "../contexts/SearchQueryContext"
import { searchDoctor as searchDoctorApi } from "../services/apiDoctors"

export function useSearchDoctor() {
  const { searchQuery } = useSearchQuery()
  const queryClient = useQueryClient()

  const { data: searchResults = [], isLoading: isSearching } = useQuery({
    queryKey: ["searchResults"],
    queryFn: () => searchDoctorApi(searchQuery),
  })

  queryClient.invalidateQueries({ queryKey: ["searchResults"] })

  return { searchResults, isSearching }
}
