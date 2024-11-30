import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'NIKE AIR MAX 270',
    price: 150,
    image: '/images/product-showcase-1.jpg',
    description: 'REVOLUTIONARY COMFORT. ICONIC STYLE.',
  },
  {
    id: 2,
    name: 'NIKE REACT INFINITY',
    price: 160,
    image: '/images/product-showcase-2.jpg',
    description: 'ENGINEERED FOR ULTIMATE PERFORMANCE.',
  },
  {
    id: 3,
    name: 'NIKE ZOOMX VAPORFLY',
    price: 250,
    image: '/images/product-showcase-3.jpg',
    description: 'BREAK YOUR PERSONAL RECORDS.',
  },
]

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <section className="py-12 sm:py-20 px-4 bg-white border-y-8 border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 font-mono">
          FEATURED_TECHNOLOGY.exe
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="relative">
            <div className="brutalist-border overflow-hidden">
              <img
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black text-white p-2 sm:p-4 font-mono text-sm sm:text-base">
              ${products[activeProduct].price}
            </div>
          </div>
          
          <div className="font-mono">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">{products[activeProduct].name}</h3>
            <p className="text-base sm:text-xl mb-6 sm:mb-8">{products[activeProduct].description}</p>
            
            <div className="space-y-4">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  className={`w-full text-left p-3 sm:p-4 brutalist-border brutalist-hover transition-transform duration-200 text-sm sm:text-base ${
                    index === activeProduct ? 'bg-black text-white' : 'bg-white'
                  }`}
                >
                  {`> ${product.name}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

