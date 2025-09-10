import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Search, ArrowRight, Phone } from "lucide-react";
import { cities } from "@/data/mockData";

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "1",
  });

  const handleSearch = () => {
    // Navigate to search results
    console.log("Searching for:", searchData);
  };

  const phoneNumber = "7668625945";

  return (
    <section className="relative hero-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Book Instant Confirmed
            <span className="block text-primary">Bus Tickets</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-fade-in">
            Travel comfortably across India with live tracking, flexible tickets, and premium amenities
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-xl p-6 shadow-2xl text-gray-900 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {/* From */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select 
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchData.from}
                    onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                  >
                    <option value="">Select city</option>
                    {cities.map(city => (
                      <option key={city.id} value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* To */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select 
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchData.to}
                    onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                  >
                    <option value="">Select city</option>
                    {cities.map(city => (
                      <option key={city.id} value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10 py-3"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select 
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({...searchData, passengers: e.target.value})}
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleSearch}
                variant="hero"
                size="lg"
                className="flex-1 gap-2"
              >
                <Search className="w-5 h-5" />
                Search Buses
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = `tel:+91${phoneNumber}`}
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Phone className="w-4 h-4" />
                Call {phoneNumber}
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary">50L+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-white/80">Routes</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-white/80">Refund Policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;