import { useContext } from "react"
import { StoreContext } from "./context-and-reducer/StoreContext"

export default function BasketProduct({item}) {

    const {removeToBasket} = useContext(StoreContext);


    const handelRemove = () => {
        removeToBasket(item)
    } 


  return (
    
    <div className="flex flex-row items-center justify-center gap-10 px-10 my-10  border border-gray-300 p-8 ">
        <img src={item.image} alt={item.name + "glasses"} 

            className="w-40 "
        />

        <div className="w-1/2 px-10 flex justify-around">
            <p className="text-xl font-medium w-1/4">{item.name}</p>
            <p className="text-xl w-1/4 ">${item.price.toFixed(2)}</p>
        </div>

            <button className="bg-gray-500 text-white font-medium text-lg rounded-lg p-4 hover:bg-red-500"
            onClick={handelRemove}
            >
                Remove
            </button>

    </div>
  )
}
