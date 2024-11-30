import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getDoctorByID } from "../../services/apiDoctors"

export function useGetDoctorByID() {
  const { doctor_id } = useParams()

  const { data: doctor = {}, isLoading: gettingDoctor } = useQuery({
    queryKey: ["doctor", doctor_id],
    queryFn: () => getDoctorByID(doctor_id),
  })

  return { doctor, gettingDoctor }
}
