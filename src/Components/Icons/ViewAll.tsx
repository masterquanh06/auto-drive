import ArrowRight from "./ArrowRight"

function ViewAll() {
  return (

    <button className="text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition flex cursor-pointer gap-1">
      <span className="font-semibold"> View All</span>
      <ArrowRight />
    </button>

  )
}

export default ViewAll