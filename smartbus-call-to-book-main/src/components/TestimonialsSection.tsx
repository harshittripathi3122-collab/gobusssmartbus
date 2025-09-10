import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Passengers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thousands of satisfied customers choose SmartBus for their travel needs
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed font-medium">
              "{testimonials[currentIndex].comment}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Join Thousands of Happy Travelers
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the SmartBus difference. Book your next journey with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Book Online Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = 'tel:+917668625945'}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Call 7668625945
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;