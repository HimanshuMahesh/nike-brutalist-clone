import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'SARAH.J',
    role: 'PRO_RUNNER',
    content: 'NIKE SHOES HAVE BEEN A GAME-CHANGER FOR MY TRAINING. THE COMFORT AND SUPPORT ARE UNMATCHED.',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'MICHAEL.C',
    role: 'FITNESS_ENTHUSIAST',
    content: 'I\'VE TRIED MANY BRANDS, BUT NIKE CONSISTENTLY DELIVERS THE BEST QUALITY AND STYLE.',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'EMILY.R',
    role: 'YOGA_INSTRUCTOR',
    content: 'NIKE\'S COMMITMENT TO SUSTAINABILITY ALIGNS PERFECTLY WITH MY VALUES. PLUS, THEIR PRODUCTS ARE AMAZING!',
    image: '/images/testimonial-3.jpg',
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 font-mono text-center">
          USER_FEEDBACK.log
        </h2>
        
        <div className="relative brutalist-border p-4 sm:p-8 bg-white">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 brutalist-border overflow-hidden">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 font-mono text-center sm:text-left">
              <p className="text-base sm:text-xl mb-4">{testimonials[currentTestimonial].content}</p>
              <p className="font-bold">{testimonials[currentTestimonial].name}</p>
              <p className="text-xs sm:text-sm">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-6 sm:mt-8">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="px-4 sm:px-6 py-2 sm:py-3 brutalist-border brutalist-hover bg-white transition-transform duration-200 text-sm sm:text-base"
            >
              PREV
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="px-4 sm:px-6 py-2 sm:py-3 brutalist-border brutalist-hover bg-white transition-transform duration-200 text-sm sm:text-base"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

