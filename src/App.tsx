import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrendingNow from './components/TrendingNow'
import FeaturedCollections from './components/FeaturedCollections'
import JustIn from './components/JustIn'
import FeaturedProducts from './components/FeaturedProducts'
import NewsletterSignup from './components/NewsletterSignup'
import Footer from './components/Footer'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <TrendingNow />
                <FeaturedCollections />
                <ProductShowcase />
                <JustIn />
                <Testimonials />
                <FeaturedProducts />
                <NewsletterSignup />
              </>
            } />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

