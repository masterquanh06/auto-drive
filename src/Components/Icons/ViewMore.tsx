import ArrowRight from "./ArrowRight"

function ViewMore() {
    return (
        <button className="text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition flex cursor-pointer">
            <span className="font-semibold"> View More</span>
            <ArrowRight />
        </button>
    )
}

export default ViewMore