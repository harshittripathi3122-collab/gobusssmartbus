import { 
  MapPin, Calendar, Shield, Bed, Sparkles, Zap, 
  AirVent, Store, ChevronRight 
} from "lucide-react";
import { features } from "@/data/mockData";

const iconMap = {
  MapPin, Calendar, Shield, Bed, Sparkles, Zap, AirVent, Store
};

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">SmartBus</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience premium bus travel with modern amenities, 
            reliable service, and customer-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={feature.id}
                className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <button className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all group-hover:text-primary-hover">
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 card-shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our travel experts are available 24/7 to help you find the perfect bus for your journey
            </p>
            <button 
              onClick={() => window.location.href = 'tel:+917668625945'}
              className="cta-phone px-8 py-4 rounded-xl text-lg"
            >
              Call 7668625945 Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;