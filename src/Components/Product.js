
export default function Product({item}) {
  return (
    <div className="max-auto px-8 border border-gray-200 rounded-lg">
        <img src={item.image} alt="glasses" />
        <div className="flex flex-row items-center justify-between py-4">
            <div>
                <p className="text-xl">{item.name}</p>
                <p className="text-lg">{item.price}</p>
            </div>
            <button className="bg-indingo-500 text-white text-lg font-medium rounded-full p-4">Add to Basket</button>
        </div>
    </div>
  )
}
