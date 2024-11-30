import DoctorsTable from "../features/doctors/DoctorsTable"
import Main from "../ui/Main"
import NavBar from "../ui/NavBar"

function Dashboard() {
  return (
    <Main>
      <NavBar />

      <DoctorsTable />
    </Main>
  )
}

export default Dashboard
