import { useEffect, useState } from "react"
import { useSearchQuery } from "../../contexts/SearchQueryContext"
import SpinnerFullPage from "../../ui/SpinnerFullPage"
import Actions from "../../ui/Actions"
import { useGetAllDoctors } from "./useGetAllDoctors"
import { useSearchDoctor } from "./useSearchDoctor"
import TableHeader from "../../ui/TableRowHeader"
import TableRowBody from "../../ui/TableRowBody"
import Table from "../../ui/Table"

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
    <Table>
      <TableHeader>
        <th>Doctor ID</th>
        <th>Email</th>
        <th>Username</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Years of Experience</th>
        <th>Specialization</th>
        <th>Contact</th>
        <th>Action</th>
      </TableHeader>

      <tbody>
        {(searchQuery && searchResults.length === 0) ||
        allDoctors.length === 0 ? (
          <tr>
            <td colSpan="9" className="pt-[10%] text-center text-3xl">
              Sorry, but no data available 😭
            </td>
          </tr>
        ) : (
          rows.map((doctor) => (
            <TableRowBody key={doctor.doctor_id}>
              <td>{doctor.doctor_id}</td>
              <td>{doctor.email}</td>
              <td>{doctor.username}</td>
              <td>{doctor.first_name}</td>
              <td>{doctor.last_name}</td>
              <td>{doctor.years_of_experience}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.contact}</td>
              <td>
                <Actions
                  doctor_id={doctor.doctor_id}
                  username={doctor.username}
                />
              </td>
            </TableRowBody>
          ))
        )}
      </tbody>
    </Table>
  )
}

export default DoctorsTable
