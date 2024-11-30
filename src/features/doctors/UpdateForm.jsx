import { useForm } from "react-hook-form"
import { HiMiniPencilSquare } from "react-icons/hi2"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import NavigateBack from "../../ui/NavigateBack"
import SpinnerFullPage from "../../ui/SpinnerFullPage"
import { useGetDoctorByID } from "./useGetDoctorByID"
import { useUpdateDoctor } from "./useUpdateDoctor"
import { useSession } from "../../hooks/useSession"
import { useInputFocus } from "../../hooks/useInputFocus"

function UpdateForm() {
  const { doctor, gettingDoctor } = useGetDoctorByID()
  const {
    doctor_id,
    email,
    username,
    first_name,
    last_name,
    years_of_experience,
    specialization,
    contact,
  } = doctor

  const { updateDoctor, updatingDoctor, error } = useUpdateDoctor()
  const { register, formState, handleSubmit, reset } = useForm()
  const { errors } = formState
  const { activeUserId, activeUser } = useSession()

  const { inputFocusRef } = useInputFocus()

  if (updatingDoctor || gettingDoctor) return <SpinnerFullPage />

  if (error) return <p>{error.message}</p>

  function onSubmit(data) {
    updateDoctor({ doctor_id, ...data, activeUserId, activeUser })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Doctor ID" error={errors?.doctor_id?.message}>
        <Input
          type="text"
          id="doctor_id"
          defaultValue={doctor_id}
          disabled={true}
          style="notAllowed"
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          ref={inputFocusRef}
          type="email"
          id="email"
          defaultValue={email}
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

      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          type="username"
          id="username"
          defaultValue={username}
          disabled={gettingDoctor || updatingDoctor}
          {...register("username", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Username must be 8 characters long",
            },
            pattern: {
              value: /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?~-]).{8,}$/,
              message: "Username must include at least one special character",
            },
          })}
        />
      </FormRow>

      <FormRow label="First name" error={errors?.first_name?.message}>
        <Input
          type="text"
          id="first_name"
          defaultValue={first_name}
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
          defaultValue={last_name}
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
          defaultValue={years_of_experience}
          disabled={gettingDoctor || updatingDoctor}
          {...register("years_of_experience", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Specialization" error={errors?.specialization?.message}>
        <Input
          type="text"
          id="specialization"
          defaultValue={specialization}
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
          defaultValue={contact}
          disabled={gettingDoctor || updatingDoctor}
          {...register("contact", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <div className="flex justify-between">
        <NavigateBack disabled={gettingDoctor || updatingDoctor} />

        <div className="flex space-x-2">
          <Button onClick={() => reset()} style="reset">
            Reset
          </Button>
          <Button type="submit" style="submit">
            <span>Update doctor</span>
            <HiMiniPencilSquare />
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default UpdateForm
