function TableRowBody({ children }) {
  return (
    <tr className="divide-y-2 [&_td:nth-child(odd)]:bg-gray-200 [&_td]:px-6 [&_td]:py-3">
      {children}
    </tr>
  )
}

export default TableRowBody
