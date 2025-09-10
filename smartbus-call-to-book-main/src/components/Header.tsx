import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "7668625945";

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-primary">
              SmartBus
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#routes" className="text-muted-foreground hover:text-foreground transition-colors">
              Routes
            </a>
            <a href="#offers" className="text-muted-foreground hover:text-foreground transition-colors">
              Offers
            </a>
            <a href="#lounges" className="text-muted-foreground hover:text-foreground transition-colors">
              Lounges
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              My Bookings
            </Button>
            
            <Button 
              variant="phone" 
              size="lg"
              onClick={() => window.location.href = `tel:+91${phoneNumber}`}
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Call to Book: {phoneNumber}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="py-4 space-y-4">
              <a href="#routes" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Routes
              </a>
              <a href="#offers" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Offers
              </a>
              <a href="#lounges" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Lounges
              </a>
              <a href="#contact" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
                Contact Us
              </a>
              
              <div className="px-4 pt-4 border-t border-border space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  My Bookings
                </Button>
                
                <Button 
                  variant="phone" 
                  className="w-full gap-2"
                  onClick={() => window.location.href = `tel:+91${phoneNumber}`}
                >
                  <Phone className="w-4 h-4" />
                  Call to Book: {phoneNumber}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;