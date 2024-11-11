import DoctorsTable from "../components/DoctorsTable"
import NavBar from "../components/NavBar"

function Dashboard() {
  return (
    <div className="mx-auto my-10 space-y-10">
      <NavBar />

      <DoctorsTable />
    </div>
  )
}

export default Dashboard
