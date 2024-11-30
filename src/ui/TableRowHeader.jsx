function TableHeader({ children }) {
  return (
    <thead className="z-100 sticky top-0 bg-gray-100">
      <tr className="[&_th:nth-child(odd)]:bg-gray-200 [&_th]:px-6 [&_th]:py-3 [&_th]:text-start">
        {children}
      </tr>
    </thead>
  )
}

export default TableHeader
