import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium" >
        <NavLink to="/" className="text-black p-2 rounded-md aria-[current=page]:bg-indigo-500">Home</NavLink>
        <NavLink to="/basket" className="text-black p-2 rounded-md aria-[current=page]:bg-indigo-500">Basket</NavLink>
    </div>
  )
}
