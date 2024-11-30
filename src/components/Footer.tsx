import { Link } from 'react-router-dom'
import { Facebook, Twitter, YoutubeIcon as YouTube, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">FIND A STORE</h3>
            <ul className="space-y-2">
              <li><Link to="/become-a-member" className="hover:underline transition-all duration-200 text-sm sm:text-base">BECOME A MEMBER</Link></li>
              <li><Link to="/feedback" className="hover:underline transition-all duration-200 text-sm sm:text-base">SEND US FEEDBACK</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">GET HELP</h3>
            <ul className="space-y-2">
              <li><Link to="/order-status" className="hover:underline transition-all duration-200 text-sm sm:text-base">Order Status</Link></li>
              <li><Link to="/shipping" className="hover:underline transition-all duration-200 text-sm sm:text-base">Shipping and Delivery</Link></li>
              <li><Link to="/returns" className="hover:underline transition-all duration-200 text-sm sm:text-base">Returns</Link></li>
              <li><Link to="/payment-options" className="hover:underline transition-all duration-200 text-sm sm:text-base">Payment Options</Link></li>
              <li><Link to="/contact-us" className="hover:underline transition-all duration-200 text-sm sm:text-base">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="hover:underline transition-all duration-200 text-sm sm:text-base">News</Link></li>
              <li><Link to="/careers" className="hover:underline transition-all duration-200 text-sm sm:text-base">Careers</Link></li>
              <li><Link to="/investors" className="hover:underline transition-all duration-200 text-sm sm:text-base">Investors</Link></li>
              <li><Link to="/sustainability" className="hover:underline transition-all duration-200 text-sm sm:text-base">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/nike" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-200">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com/nike" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-200">
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com/nike" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-200">
                <YouTube size={24} />
              </a>
              <a href="https://instagram.com/nike" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-700 text-xs sm:text-sm">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap gap-4">
              <Link to="/guides" className="hover:underline transition-all duration-200">Guides</Link>
              <Link to="/terms-of-sale" className="hover:underline transition-all duration-200">Terms of Sale</Link>
              <Link to="/terms-of-use" className="hover:underline transition-all duration-200">Terms of Use</Link>
              <Link to="/privacy-policy" className="hover:underline transition-all duration-200">Nike Privacy Policy</Link>
            </div>
            <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

