import { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { StoreContext } from '../Components/context-and-reducer/StoreContext'
import BasketProduct from '../Components/BasketProduct'

export default function Basket() {

    const {products, total} = useContext(StoreContext);


  return (
    <div className='w-full max-w-3xl mx-auto'>
        <Navbar/>
        <div className='w-full'>
        <div className='flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium '>
            <h3>Your Basket</h3>
            <p className='bg-indigo-700 p-2 text-white rounded-lg'>Total: ${total}</p>
        </div>
        {products.map((product, i) => 
            <BasketProduct
                key={i}
                item={product}
            />
        )}
        </div>
    </div>
  )
}
