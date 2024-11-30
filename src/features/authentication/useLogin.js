import { useMutation } from "@tanstack/react-query"
import { login as loginApi } from "../../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function useLogin() {
  const navigate = useNavigate()

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi(username, password),
    onSettled: (data) => {
      if (data.status === 200) {
        toast.success(data.message)
        sessionStorage.setItem(
          "current_user",
          JSON.stringify({ activeUser: data.username, activeUserId: data.id }),
        )
        navigate("/", { replace: true })
      } else {
        toast.error(data.message)
      }
    },
  })

  return { login, isLoading }
}
