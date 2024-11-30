import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { updateDoctor as updateDoctorApi } from "../../services/apiDoctors"

export function useUpdateDoctor() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { doctor_id } = useParams()

  const {
    mutate: updateDoctor,
    isLoading: updatingDoctor,
    error,
  } = useMutation({
    mutationFn: updateDoctorApi,
    onSettled: (data) => {
      if (data.success === 200) {
        toast.success(data.message)
        queryClient.invalidateQueries({ queryKey: ["doctor", doctor_id] })
        navigate("/dashboard", { replace: true })
      } else {
        toast.error(data.message)
      }
    },
  })

  return { updateDoctor, updatingDoctor, error }
}
