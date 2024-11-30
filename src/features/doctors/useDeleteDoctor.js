import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteDoctor as deleteDoctorApi } from "../../services/apiDoctors"
import { useSession } from "../../hooks/useSession"

export function useDeleteDoctor() {
  const queryClient = useQueryClient()
  const { activeUserId, activeUser } = useSession()

  const { mutate: deleteDoctor } = useMutation({
    mutationFn: ({ doctor_id, username }) =>
      deleteDoctorApi({ doctor_id, username, activeUserId, activeUser }),
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
