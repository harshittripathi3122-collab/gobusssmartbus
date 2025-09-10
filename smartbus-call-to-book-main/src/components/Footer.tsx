import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">SmartBus</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              India's leading bus booking platform offering comfortable, 
              safe, and reliable travel experiences across the country.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+917668625945"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">7668625945</span>
              </a>
              <a 
                href="mailto:support@smartbus.com"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>support@smartbus.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Bus Tickets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Routes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Group Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Volvo Bus Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">My Bookings</a></li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Offers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Track Refund</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Advertise with Us</a></li>
            </ul>
          </div>

          {/* Top Cities */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Top SmartBus Cities</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Mumbai Bus Tickets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Delhi Bus Tickets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Bangalore Bus Tickets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Chennai Bus Tickets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Hyderabad Bus Tickets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Pune Bus Tickets</a></li>
            </ul>
          </div>
        </div>

        {/* Call to Book Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Prefer to Book by Phone?</h4>
            <p className="text-gray-300 mb-6">
              Our travel experts are available 24/7 to help you find the best routes and deals
            </p>
            <a 
              href="tel:+917668625945"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call 7668625945 to Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Company Details */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-400">
                <strong>IndoRailBus Travel Private Limited</strong>
              </p>
              <p className="text-sm text-gray-400">
                CIN: U63030KA2010PTC056687
              </p>
              <p className="text-sm text-gray-400">
                Registered Office: #123, Tech Park, Bangalore, Karnataka - 560001
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} SmartBus. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;