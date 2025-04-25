// components/Footer.jsx
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* IPL Score Tracker */}
        <div>
          <h2 className="text-xl font-bold mb-4">IPL Score Tracker</h2>
          <p className="text-sm text-gray-400">
            The ultimate destination for IPL cricket fans to stay updated with
            live scores, team standings, and match schedules.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Live Scores</a></li>
            <li><a href="#" className="hover:text-white">Schedule</a></li>
            <li><a href="#" className="hover:text-white">Teams</a></li>
            <li><a href="#" className="hover:text-white">Stats</a></li>
            <li><a href="#" className="hover:text-white">News</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
          <p className="text-sm text-gray-400">
            Download our mobile app for a better experience
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
