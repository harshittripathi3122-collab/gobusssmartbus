import { useState } from "react";
import { Phone, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCallButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "7668625945";

  return (
    <>
      {/* Mobile Sticky Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg p-4">
        <Button 
          variant="phone"
          size="lg"
          onClick={() => window.location.href = `tel:+91${phoneNumber}`}
          className="w-full gap-3 py-4"
        >
          <Phone className="w-5 h-5" />
          Call to Book: {phoneNumber}
        </Button>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        {isExpanded ? (
          <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 w-80 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Need Help Booking?</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4">
              Our booking experts are here to help you find the best routes and deals.
            </p>
            
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Available 24/7</span>
            </div>
            
            <Button 
              variant="phone"
              onClick={() => window.location.href = `tel:+91${phoneNumber}`}
              className="w-full gap-2"
            >
              <Phone className="w-4 h-4" />
              Call {phoneNumber}
            </Button>
            
            <div className="mt-3 text-center">
              <button className="text-xs text-primary hover:underline">
                Request a callback instead
              </button>
            </div>
          </div>
        ) : (
          <Button
            variant="phone"
            size="lg"
            onClick={() => setIsExpanded(true)}
            className="rounded-full shadow-2xl hover:shadow-3xl w-16 h-16 p-0"
          >
            <Phone className="w-6 h-6" />
          </Button>
        )}
      </div>
    </>
  );
};

export default StickyCallButton;