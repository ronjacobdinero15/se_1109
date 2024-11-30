import FormRow from "../ui/FormRow"
import Heading from "../ui/Heading"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Form from "../ui/Form"
import { useEffect, useState } from "react"
import { useLogin } from "../features/authentication/useLogin"
import { useNavigate } from "react-router-dom"
import { useSession } from "../hooks/useSession"
import toast from "react-hot-toast"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLoading } = useLogin()

  const navigate = useNavigate()
  const { activeUser } = useSession()

  useEffect(() => {
    if (activeUser) {
      navigate("/", { replace: true })
    }
  }, [navigate, activeUser])

  function handleLogin(e) {
    e.preventDefault()

    if (!username || !password) {
      toast.error("Fill in input fields")
      return
    }

    login({ username, password })
  }

  return (
    <main className="mx-auto flex h-dvh flex-col items-center justify-center overflow-y-hidden bg-gray-100">
      <Heading as="h2">Login</Heading>

      <div className="w-[30rem] rounded-md bg-white px-10 py-5">
        <Form>
          <FormRow label="Username address" style="login">
            <Input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          </FormRow>

          <FormRow label="Password" style="login">
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </FormRow>

          <Button type="submit" onClick={handleLogin} style="submit">
            Login
          </Button>
        </Form>
      </div>
    </main>
  )
}

export default Login
