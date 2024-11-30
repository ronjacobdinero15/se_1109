import { useQuery } from "@tanstack/react-query"
import { getActivityLogs } from "../../services/apiDoctors"

export function useActivityLogs() {
  const { data: activityLogs, isLoading } = useQuery({
    queryKey: ["activityLogs"],
    queryFn: getActivityLogs,
  })


  return { activityLogs, isLoading }
}
