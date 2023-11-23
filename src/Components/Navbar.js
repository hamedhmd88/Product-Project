import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StoreContext } from "./context-and-reducer/StoreContext";

export default function Navbar() {

  const {products} = useContext(StoreContext)

  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium" >
        <NavLink to="/" className="text-black p-2 rounded-md aria-[current=page]:bg-indigo-500">Home</NavLink>
        <NavLink to="/basket" className="text-black p-2 rounded-md aria-[current=page]:bg-indigo-500">
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">{products.length}</span>
        </NavLink>
    </div>
  )
}
