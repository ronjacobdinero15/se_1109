import { apiUrl } from "../utils/links"

export async function getAllDoctors() {
  const res = await fetch(`${apiUrl}?action=getAllDoctors`)

  if (!res.ok) throw new Error("Could not fetch all doctors")

  return await res.json()
}

export async function getDoctorByID(doctor_id) {
  const res = await fetch(
    `${apiUrl}?action=getDoctorByID&doctor_id=${doctor_id}`,
  )

  if (!res.ok) throw new Error("Could not fetch the doctor")

  return await res.json()
}

export async function insertDoctor({
  email,
  username,
  password,
  first_name,
  last_name,
  years_of_experience,
  specialization,
  contact,
  activeUserId,
  activeUser,
}) {
  const res = await fetch(`${apiUrl}?action=insertDoctor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
      first_name,
      last_name,
      years_of_experience,
      specialization,
      contact,
      activeUserId,
      activeUser,
    }),
  })

  if (!res.ok) throw new Error("Could not register a new doctor")

  return await res.json()
}

export async function deleteDoctor({
  doctor_id,
  username,
  activeUserId,
  activeUser,
}) {
  if (confirm("Are you sure you want to delete this doctor?")) {
    const res = await fetch(`${apiUrl}?action=deleteDoctor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctor_id,
        username,
        activeUserId,
        activeUser,
      }),
    })

    if (!res.ok)
      throw new Error(`Could not delete the doctor with ID #${doctor_id}`)

    return await res.json()
  }
}

export async function updateDoctor({
  doctor_id,
  email,
  username,
  first_name,
  last_name,
  years_of_experience,
  specialization,
  contact,
  activeUserId,
  activeUser,
}) {
  const res = await fetch(
    `${apiUrl}?action=updateDoctor&doctor_id=${doctor_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctor_id,
        email,
        username,
        first_name,
        last_name,
        years_of_experience,
        specialization,
        contact,
        activeUserId,
        activeUser,
      }),
    },
  )

  if (!res.ok)
    throw new Error(`Could not update the doctor with ID #${doctor_id}`)

  return await res.json()
}

export async function searchDoctor(searchQuery, activeUserId, activeUser) {
  const res = await fetch(`${apiUrl}?action=searchDoctor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchQuery,
      activeUserId,
      activeUser,
    }),
  })

  if (!res.ok) throw new Error("Could not fetch search results")

  return await res.json()
}

export async function getActivityLogs() {
  const res = await fetch(`${apiUrl}?action=getActivityLogs`)

  if (!res.ok) throw new Error("Could not fetch activity logs")

  return await res.json()
}
