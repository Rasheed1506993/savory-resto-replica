
import { useEffect } from 'react';
import { Clock, MapPin, Phone, ChefHat, UtensilsCrossed } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      element.classList.add('opacity-0');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    {
      name: "Grilled Sea Bass",
      description: "Fresh sea bass with herbs and lemon butter sauce",
      price: "$32",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Truffle Risotto",
      description: "Creamy risotto with fresh black truffle and parmesan",
      price: "$28",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      name: "Wagyu Steak",
      description: "Premium wagyu beef with roasted vegetables",
      price: "$45",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    }
  ];

  return (
    <div className="min-h-screen bg-restaurant-cream smooth-scroll">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6">Savory</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Fine dining at its finest</p>
          <Button className="bg-restaurant-gold text-white hover:bg-white hover:text-restaurant-black transition-colors">
            Make a Reservation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="section-heading">Our Story</h2>
            <p className="section-subheading">
              A culinary journey that began over two decades ago, bringing together the finest ingredients
              and traditional techniques to create unforgettable dining experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <ChefHat className="w-12 h-12 text-restaurant-gold mx-auto mb-4" />
                <h3 className="font-display text-xl mb-2">Master Chefs</h3>
                <p className="text-gray-600">Culinary experts with decades of experience</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <UtensilsCrossed className="w-12 h-12 text-restaurant-gold mx-auto mb-4" />
                <h3 className="font-display text-xl mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">Locally sourced, seasonal produce</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Clock className="w-12 h-12 text-restaurant-gold mx-auto mb-4" />
                <h3 className="font-display text-xl mb-2">Perfect Timing</h3>
                <p className="text-gray-600">Each dish served at its peak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="section-heading">Featured Menu</h2>
            <p className="section-subheading">
              Discover our chef's specially curated selection of dishes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="group">
                  <div className="menu-item-image mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-restaurant-gold font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact Section */}
      <section id="hours" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h2 className="section-heading">Hours</h2>
                <div className="space-y-4 text-lg">
                  <p><span className="font-semibold">Monday - Thursday:</span> 5:30 PM - 10:00 PM</p>
                  <p><span className="font-semibold">Friday - Saturday:</span> 5:30 PM - 11:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> 5:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div id="contact" className="text-center md:text-left">
                <h2 className="section-heading">Contact</h2>
                <div className="space-y-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-restaurant-gold mr-2" />
                    123 Gourmet Street, Culinary City
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <Phone className="w-5 h-5 text-restaurant-gold mr-2" />
                    (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-restaurant-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-display text-2xl mb-4">Savory</p>
          <p className="text-gray-400">© 2024 Savory Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
