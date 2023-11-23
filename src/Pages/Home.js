import React from 'react'
import Navbar from '../Components/Navbar'
import { storeData } from '../Data'
import Product from '../Components/Product'

export default function Home() {
  return (
    <div>
    <Navbar/>
        <h1 className='text-3xl text-center font-semibold mt-2 py-4' >useContext and useReducer</h1>
        <h2 className='text-4xl tracking-wide py-4 pl-8'>New In</h2>
        <div className='flex flex-col items-center lg:grid lg:grid-cols-3 gap-4 px-8'>
        {storeData.map((item,i) => 
            <Product 
                key={i}
                item={item}
            />
        )}
        </div>
    </div>
  )
}
