function Form({ children, onSubmit, onChange }) {
  return (
    <form
      onSubmit={onSubmit}
      onChange={onChange}
      className="relative space-y-5"
    >
      {children}
    </form>
  )
}

export default Form
