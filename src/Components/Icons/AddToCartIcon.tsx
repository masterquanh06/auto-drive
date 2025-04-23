import CartIcon from "./CartIcon"
import IncreaseICon from "./IncreaseICon"

export default function AddToCart() {
    return (
        <button className="text-gray-700 px-2 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition flex cursor-pointer">
           <IncreaseICon/>
           <CartIcon />
        </button>
    )
}
