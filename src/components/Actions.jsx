import { Link } from "react-router-dom"
import { useDeleteDoctor } from "../hooks/useDeleteDoctor"

function Actions({ doctor_id }) {
  const { deleteDoctor } = useDeleteDoctor()

  return (
    <div className="space-x-4">
      <Link
        to={`/update/${doctor_id}`}
        className="transition-colors hover:text-sky-500 hover:underline hover:underline-offset-4 focus:rounded-md focus:outline-none focus:ring"
      >
        Edit
      </Link>

      <button
        onClick={() => deleteDoctor(doctor_id)}
        className="hover:text-red-500 hover:underline hover:underline-offset-4 focus:rounded-md focus:outline-none focus:ring"
      >
        Delete
      </button>
    </div>
  )
}

export default Actions
