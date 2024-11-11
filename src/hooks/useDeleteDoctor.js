import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoctor as deleteDoctorApi } from "../services/apiDoctors"
import toast from "react-hot-toast"

export function useDeleteDoctor() {
  const queryClient = useQueryClient()

  const { mutate: deleteDoctor } = useMutation({
    mutationFn: deleteDoctorApi,
    onSuccess: (data) => {
      if (data.success === 200) {
        toast.success(data.message)
        queryClient.invalidateQueries({ queryKey: ["doctors"] })
        queryClient.invalidateQueries({ queryKey: ["searchResults"] })
      }
    },
    onError: (data) => {
      if (data.success === 400) {
        toast.error(data.message)
      }
    },
  })

  return { deleteDoctor }
}
