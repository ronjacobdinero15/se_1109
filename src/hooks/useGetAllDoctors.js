import { useQuery } from "@tanstack/react-query"
import { getAllDoctors } from "../services/apiDoctors"

export function useGetAllDoctors() {
  const {
    data: allDoctors = [],
    isLoading: isLoadingAllDoctors,
    error,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: getAllDoctors,
  })

  return { allDoctors, isLoadingAllDoctors, error }
}
