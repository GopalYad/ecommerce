import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Ecommerce
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href={'/'} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href={'/products'} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Products
            </Link>
            <Link href={'/checkout'} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              CheckOut
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar