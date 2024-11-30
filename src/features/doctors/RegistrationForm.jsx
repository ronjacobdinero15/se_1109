import { useForm } from "react-hook-form"
import { HiOutlineUserPlus } from "react-icons/hi2"
import { useInputFocus } from "../../hooks/useInputFocus"
import { useSession } from "../../hooks/useSession"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import NavigateBack from "../../ui/NavigateBack"
import SpinnerFullPage from "../../ui/SpinnerFullPage"
import { useInsertDoctor } from "./useInsertDoctor"

function RegistrationForm() {
  const { insertDoctor, isInserting, error } = useInsertDoctor()
  const { activeUserId, activeUser } = useSession()
  const { register, formState, handleSubmit, reset } = useForm()
  const { errors } = formState

  const { inputFocusRef } = useInputFocus()

  if (isInserting) return <SpinnerFullPage />

  if (error) return <p>{error.message}</p>

  function onSubmit(data) {
    insertDoctor({ ...data, activeUserId, activeUser })

    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          // ! MAKE SURE FOCUS REF COMES FIRST BEFORE REACT HOOK FORM VALIDATION
          ref={inputFocusRef}
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

      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          type="username"
          id="username"
          disabled={isInserting}
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

      <FormRow
        label={
          <>
            Password <br /> <span className="text-xs">(min 8 characters)</span>
          </>
        }
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isInserting}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isInserting}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value, fieldValues) =>
              value === fieldValues.password || "Password need to match",
          })}
        />
      </FormRow>

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

      <FormRow label="Specialization" error={errors?.specialization?.message}>
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

      <div className="flex justify-between">
        <NavigateBack disabled={isInserting} />

        <div className="flex space-x-2">
          <Button onClick={() => reset()} style="reset" disabled={isInserting}>
            Reset
          </Button>
          <Button type="submit" disabled={isInserting} style="submit">
            <span>Create new row</span>
            <HiOutlineUserPlus />
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default RegistrationForm
