import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#02060c] text-white py-10 mt-20">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <img src="/images/logo.png" alt="Swiggy" className="w-24 mb-4" />
          <p className="text-gray-400">
            Swiggy is India’s leading on-demand delivery platform, bringing your favorite food right to your doorstep.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Swiggy One</a></li>
          </ul>
        </div>

        {/* Contact & Help */}
        <div>
          <h3 className="font-bold mb-4">Contact & Help</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Ride with us</a></li>
          </ul>
        </div>

        {/* Social & Apps */}
        <div>
          <h3 className="font-bold mb-4">Connect with us</h3>
          <div className="flex space-x-4 mb-4 ">
            <FaFacebookF className="hover:text-[#ff6600] cursor-pointer" />
            <FaTwitter className="hover:text-[#ff6600] cursor-pointer" />
            <FaInstagram className="hover:text-[#ff6600] cursor-pointer" />
          </div>
          <div className="space-y-2">
            <img src="/images/play_store.png" alt="Play Store" className="w-32" />
            <img src="/images/app_store.png" alt="App Store" className="w-32" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-xs mt-10">
        © {new Date().getFullYear()} Swiggy. All rights reserved.
      </div>
    </footer>
  );
}
