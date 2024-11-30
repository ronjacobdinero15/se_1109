import Heading from "./Heading"

function FormLayout({ headingLabel, children }) {
  return (
    <main className="flex h-dvh flex-col items-center justify-center overflow-y-hidden bg-gray-100">
      <Heading as="h2">{headingLabel}</Heading>

      <div className="w-[50rem] rounded-md bg-white px-10 py-5">{children}</div>
    </main>
  )
}

export default FormLayout
