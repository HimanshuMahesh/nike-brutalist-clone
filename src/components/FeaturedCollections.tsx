import { Link } from 'react-router-dom'

const collections = [
  { id: 1, name: "Nike Air", image: "/images/collection-1.jpg", description: "Legendary comfort. Iconic style." },
  { id: 2, name: "Nike Sportswear", image: "/images/collection-2.jpg", description: "Essentials for every day" },
  { id: 3, name: "Jordan", image: "/images/collection-3.jpg", description: "Inspired by greatness" },
]

export default function FeaturedCollections() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collection/${collection.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-lg">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

