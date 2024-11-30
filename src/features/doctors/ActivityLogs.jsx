import NavigateBack from "../../ui/NavigateBack"
import SpinnerFullPage from "../../ui/SpinnerFullPage"
import Table from "../../ui/Table"
import TableRowBody from "../../ui/TableRowBody"
import TableRowHeader from "../../ui/TableRowHeader"
import { useActivityLogs } from "./useActivityLogs"
import { format } from "date-fns"

function ActivityLogs() {
  const { activityLogs, isLoading } = useActivityLogs()

  if (isLoading) return <SpinnerFullPage />

  return (
    <>
      <Table>
        <TableRowHeader>
          <th>Activity Log ID</th>
          <th>Operation</th>
          <th>Doctor ID</th>
          <th>Username</th>
          <th>Date Modified</th>
        </TableRowHeader>
        <tbody>
          {activityLogs.length === 0 ? (
            <tr>
              <td colSpan="5" className="pt-[10%] text-center text-3xl">
                Sorry, but no data available 😭
              </td>
            </tr>
          ) : (
            activityLogs.map((log) => {
              const operation = log.operation.split(" ")
              return (
                <TableRowBody key={log.activity_log_id}>
                  <td>{log.activity_log_id}</td>
                  <td>
                    {operation[0]}
                    <span className="font-black italic"> {operation[1]} </span>
                    {operation.slice(2).join(" ")}
                  </td>
                  <td>{log.activeUserId}</td>
                  <td>{log.activeUser}</td>
                  <td>
                    {format(
                      new Date(log.date_added),
                      "EEEE dd, yyyy 'at' hh:mm a",
                    )}
                  </td>
                </TableRowBody>
              )
            })
          )}
        </tbody>
      </Table>

      <div className="mt-10">
        <NavigateBack />
      </div>
    </>
  )
}

export default ActivityLogs
