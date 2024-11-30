import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white border-b-8 border-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/images/hero-image.jpg")' }}
      ></div>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 grid-rows-2 sm:grid-rows-4 pointer-events-none z-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="border border-white opacity-10"
          />
        ))}
      </div>
      
      <div className="relative z-30 container mx-auto px-4 py-20 flex flex-col items-start justify-center min-h-screen">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-8 font-mono text-white leading-tight">
            JUST DO IT
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-8 sm:mb-12 font-mono border-l-4 border-white pl-4 text-white">
            BREAK THE RULES. <br />
            BREAK THE GAME. <br />
            BREAK THE SYSTEM.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-black px-6 sm:px-12 py-3 sm:py-6 text-lg sm:text-2xl font-bold brutalist-border brutalist-hover transition-transform duration-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 p-4 sm:p-8 text-xs sm:text-sm font-mono text-white z-30">
        <p>EST.1972</p>
        <p>NIKE®</p>
      </div>
    </section>
  )
}

