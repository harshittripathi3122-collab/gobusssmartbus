import { Tag, Clock, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { offers } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const OffersSection = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Exclusive <span className="text-primary">Offers & Deals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Save more on your bus bookings with our special promotional offers and discount codes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={offer.id}
              className="bg-white rounded-2xl p-8 card-shadow-lg border border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Offer Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Tag className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Limited Time
                </span>
              </div>

              {/* Offer Content */}
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {offer.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {offer.description}
              </p>

              {/* Promo Code */}
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-primary/30 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Promo Code</p>
                    <p className="text-xl font-bold text-primary">{offer.code}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(offer.code)}
                    className="gap-2"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Validity */}
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{offer.validity}</span>
              </div>

              {/* Terms */}
              <div className="mb-6">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Terms & Conditions:</strong> {offer.terms}
                </p>
              </div>

              {/* CTA */}
              <Button variant="hero" className="w-full">
                Book Now & Save
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 card-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want More Exclusive Deals?
            </h3>
            <p className="text-muted-foreground mb-6">
              Call our booking experts to unlock special phone-only discounts and personalized offers
            </p>
            <Button 
              variant="phone"
              size="lg"
              onClick={() => window.location.href = 'tel:+917668625945'}
              className="gap-2"
            >
              Call 7668625945 for Special Offers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;