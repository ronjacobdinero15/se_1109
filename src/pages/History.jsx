import ActivityLogs from "../features/doctors/ActivityLogs"
import Heading from "../ui/Heading"
import Main from "../ui/Main"

function History() {
  return (
    <Main>
      <Heading as="h2">Activity Logs</Heading>

      <ActivityLogs />
    </Main>
  )
}

export default History
