import { useState } from "react";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { faqs } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about traveling with SmartBus.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="bg-white rounded-xl border border-border overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 card-shadow border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our customer support team is available 24/7 to help you with any queries about your booking or travel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="phone" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+917668625945'}
                  className="gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call 7668625945
                </Button>
                <Button variant="outline" size="lg">
                  Live Chat Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;