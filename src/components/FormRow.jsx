function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-[10rem_20rem_auto] items-center gap-[2.4rem]">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default FormRow
