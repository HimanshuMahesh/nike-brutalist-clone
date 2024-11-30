import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: "Nike Air Max 90", price: 120, image: "/images/product-1.jpg" },
  { id: 2, name: "Nike Dri-FIT T-Shirt", price: 35, image: "/images/product-2.jpg" },
  { id: 3, name: "Nike React Infinity Run", price: 160, image: "/images/product-3.jpg" },
  { id: 4, name: "Nike Sportswear Club Fleece", price: 55, image: "/images/product-4.jpg" },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
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

