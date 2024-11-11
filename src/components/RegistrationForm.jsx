import { useForm } from "react-hook-form"
import { HiOutlineHome, HiOutlineUserPlus } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import FormRow from "../components/FormRow"
import { useInsertDoctor } from "../hooks/useInsertDoctor"
import Button from "./Button"
import Form from "./Form"
import Input from "./Input"
import SpinnerFullPage from "./SpinnerFullPage"

function RegistrationForm() {
  const { insertDoctor, isInserting, error } = useInsertDoctor()
  const navigate = useNavigate()
  const { register, formState, handleSubmit, reset } = useForm()
  const { errors } = formState

  if (isInserting) return <SpinnerFullPage />

  if (error) return <p>{error.message}</p>

  function onSubmit(data) {
    insertDoctor(data)
  }

  return (
    <main className="flex flex-col items-center justify-center mx-auto overflow-y-hidden bg-gray-100 h-dvh">
      <h2 className="pb-5 text-3xl">Register a new doctor</h2>

      <div className="w-[50rem] rounded-md bg-white px-10 py-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="First name" error={errors?.first_name?.message}>
            <Input
              type="text"
              id="first_name"
              disabled={isInserting}
              {...register("first_name", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Last name" error={errors?.last_name?.message}>
            <Input
              type="text"
              id="last_name"
              disabled={isInserting}
              {...register("last_name", { required: "This field is required" })}
            />
          </FormRow>

          <FormRow
            label="Years of experience"
            error={errors?.years_of_experience?.message}
          >
            <Input
              type="number"
              id="years_of_experience"
              disabled={isInserting}
              {...register("years_of_experience", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow
            label="Specialization"
            error={errors?.specialization?.message}
          >
            <Input
              type="text"
              id="specialization"
              disabled={isInserting}
              {...register("specialization", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Contact" error={errors?.contact?.message}>
            <Input
              type="tel"
              id="contact"
              disabled={isInserting}
              {...register("contact", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Email address" error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              disabled={isInserting}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormRow>

          <div className="flex justify-between">
            <Button
              onClick={() => navigate("/dashboard")}
              style="navigateBack"
              disabled={isInserting}
            >
              <HiOutlineHome className="size-6" />
              <span>Home</span>
            </Button>

            <div className="flex space-x-2">
              <Button
                onClick={() => reset()}
                style="reset"
                disabled={isInserting}
              >
                Reset
              </Button>

              <Button type="submit" style="register" disabled={isInserting}>
                <span>Create new row</span>
                <HiOutlineUserPlus className="size-6" />
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </main>
  )
}

export default RegistrationForm
