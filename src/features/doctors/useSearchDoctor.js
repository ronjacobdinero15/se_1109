import { useQuery } from "@tanstack/react-query"
import { searchDoctor as searchDoctorApi } from "../../services/apiDoctors"
import { useSearchQuery } from "../../contexts/SearchQueryContext"
import { useSession } from "../../hooks/useSession"

export function useSearchDoctor() {
  const { searchQuery } = useSearchQuery()
  const { activeUserId, activeUser } = useSession()

  const { data: searchResults = [], isLoading: isSearching } = useQuery({
    queryKey: ["searchResults", searchQuery, activeUserId, activeUser],
    queryFn: () => searchDoctorApi(searchQuery, activeUserId, activeUser),

    enabled: !!searchQuery, // Only run the query when searchQuery is not empty
    staleTime: Infinity, // No automatic refetching will occur
  })

  return { searchResults, isSearching }
}
