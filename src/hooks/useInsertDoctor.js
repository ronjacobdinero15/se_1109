import { useMutation } from "@tanstack/react-query"
import { insertDoctor as insertDoctorApi } from "../services/apiDoctors"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export function useInsertDoctor() {
  const navigate = useNavigate()

  const {
    mutate: insertDoctor,
    isLoading: isInserting,
    error,
  } = useMutation({
    mutationFn: insertDoctorApi,
    onSettled: (data) => {
      if (data.success === 200) {
        toast.success(data.message)
        navigate("/dashboard")
      } else if (data.success === 400) {
        toast.error(data.message)
      }
    },
  })

  return { insertDoctor, isInserting, error }
}
