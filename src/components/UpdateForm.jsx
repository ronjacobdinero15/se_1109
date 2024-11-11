import { useForm } from "react-hook-form"
import { HiMiniPencilSquare, HiOutlineHome } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { useGetDoctorByID } from "../hooks/useGetDoctorByID"
import { useUpdateDoctor } from "../hooks/useUpdateDoctor"
import Button from "./Button"
import Form from "./Form"
import FormRow from "./FormRow"
import Input from "./Input"
import SpinnerFullPage from "./SpinnerFullPage"

function UpdateForm() {
  const { doctor, gettingDoctor } = useGetDoctorByID()
  const { updateDoctor, updatingDoctor, error } = useUpdateDoctor()
  const navigate = useNavigate()
  const { register, formState, handleSubmit, reset } = useForm()
  const { errors } = formState

  if (updatingDoctor || gettingDoctor) return <SpinnerFullPage />

  if (error) return <p>{error.message}</p>

  function onSubmit(data) {
    updateDoctor({ doctor_id: doctor.doctor_id, ...data })
  }

  return (
    <main className="mx-auto flex h-dvh flex-col items-center justify-center overflow-y-hidden bg-gray-100">
      <h2 className="pb-5 text-3xl">Update doctor information</h2>

      <div className="w-[50rem] rounded-md bg-white px-10 py-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Doctor ID" error={errors?.doctor_id?.message}>
            <Input
              type="text"
              id="doctor_id"
              defaultValue={doctor.doctor_id}
              disabled={true}
              style="notAllowed"
            />
          </FormRow>

          <FormRow label="First name" error={errors?.first_name?.message}>
            <Input
              type="text"
              id="first_name"
              defaultValue={doctor.first_name}
              disabled={gettingDoctor || updatingDoctor}
              {...register("first_name", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Last name" error={errors?.last_name?.message}>
            <Input
              type="text"
              id="last_name"
              defaultValue={doctor.last_name}
              disabled={gettingDoctor || updatingDoctor}
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
              defaultValue={doctor.years_of_experience}
              disabled={gettingDoctor || updatingDoctor}
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
              defaultValue={doctor.specialization}
              disabled={gettingDoctor || updatingDoctor}
              {...register("specialization", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Contact" error={errors?.contact?.message}>
            <Input
              type="tel"
              id="contact"
              defaultValue={doctor.contact}
              disabled={gettingDoctor || updatingDoctor}
              {...register("contact", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Email address" error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              defaultValue={doctor.email}
              disabled={gettingDoctor || updatingDoctor}
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
            <Button onClick={() => navigate("/dashboard")} style="navigateBack">
              <HiOutlineHome className="size-6" />
              <span>Home</span>
            </Button>

            <div className="flex space-x-2">
              <Button onClick={() => reset()} style="reset">
                Reset
              </Button>
              <Button type="submit" style="register">
                <span>Update doctor</span>
                <HiMiniPencilSquare className="size-6" />
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </main>
  )
}

export default UpdateForm
