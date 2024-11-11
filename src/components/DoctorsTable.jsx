import { useEffect, useState } from "react"
import { useSearchQuery } from "../contexts/SearchQueryContext"
import { useGetAllDoctors } from "../hooks/useGetAllDoctors"
import { useSearchDoctor } from "../hooks/useSearchDoctor"
import Actions from "./Actions"
import SpinnerFullPage from "./SpinnerFullPage"

function DoctorsTable() {
  const { allDoctors, isLoadingAllDoctors, error } = useGetAllDoctors()
  const { searchQuery } = useSearchQuery()
  const { searchResults, isSearching } = useSearchDoctor()
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (searchQuery && searchResults.length > 0) {
      setRows(searchResults)
    } else {
      setRows(allDoctors)
    }
  }, [searchResults, allDoctors, searchQuery])

  if (isLoadingAllDoctors || isSearching) return <SpinnerFullPage />

  if (error) return <p>{error.message}</p>

  return (
    <section>
      <table className="w-full">
        <thead>
          <tr className="[&_th:nth-child(odd)]:bg-gray-200 [&_th]:px-6 [&_th]:py-3 [&_th]:text-start">
            <th>Doctor ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Years of Experience</th>
            <th>Specialization</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchQuery && searchResults.length === 0 ? (
            <tr>
              <td colSpan="8" className="pt-[10%] text-center text-3xl">
                Sorry, but no data available 😭
              </td>
            </tr>
          ) : (
            rows.map((data) => (
              <tr
                key={data.doctor_id}
                className="divide-y-2 [&_td:nth-child(odd)]:bg-gray-200 [&_td]:px-6 [&_td]:py-3"
              >
                <td>{data.doctor_id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.years_of_experience}</td>
                <td>{data.specialization}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
                <td>
                  <Actions doctor_id={data.doctor_id} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  )
}

export default DoctorsTable
