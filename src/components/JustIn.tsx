import { Link } from 'react-router-dom'

const newArrivals = [
  { id: 1, name: "Nike Air Zoom Pegasus 38", price: 120, image: "/images/just-in-1.jpg" },
  { id: 2, name: "Nike Dri-FIT ADV Run Division", price: 80, image: "/images/just-in-2.jpg" },
  { id: 3, name: "Nike Sportswear Tech Fleece", price: 110, image: "/images/just-in-3.jpg" },
  { id: 4, name: "Nike Air Force 1 '07", price: 90, image: "/images/just-in-4.jpg" },
]

export default function JustIn() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Just In</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-xl font-medium text-gray-900">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

