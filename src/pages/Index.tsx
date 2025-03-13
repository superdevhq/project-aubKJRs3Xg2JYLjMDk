
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Menu, Check, ArrowRight, BarChart2, Shield, Zap, Globe, Users, Clock } from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-white py-4"
      } px-6 md:px-12`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-indigo-600">
            <span className="inline-block transition-transform hover:scale-105">Brand</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className="hover:bg-gray-100">Log in</Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
          </div>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                <a href="#features" className="text-lg font-medium hover:text-indigo-600 transition-colors">Features</a>
                <a href="#testimonials" className="text-lg font-medium hover:text-indigo-600 transition-colors">Testimonials</a>
                <a href="#pricing" className="text-lg font-medium hover:text-indigo-600 transition-colors">Pricing</a>
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="w-full">Log in</Button>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
              Launching Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform your <span className="text-indigo-600">digital experience</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              We help businesses of all sizes build amazing digital experiences that customers love.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">Watch Demo</Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <p className="text-sm text-gray-500 font-medium">Trusted by:</p>
              <div className="flex flex-wrap gap-8">
                {["Company A", "Company B", "Company C"].map((company, i) => (
                  <div key={i} className="text-gray-400 font-semibold">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-2xl transform rotate-3 scale-105 opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  Beautiful Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools to help you manage your projects and team more effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Zap className="h-6 w-6 text-indigo-600" />,
                title: "Lightning Fast",
                description: "Our platform is optimized for speed, ensuring your team can work efficiently without delays."
              },
              {
                icon: <Globe className="h-6 w-6 text-indigo-600" />,
                title: "Global Access",
                description: "Access your projects from anywhere in the world with our cloud-based solution."
              },
              {
                icon: <Shield className="h-6 w-6 text-indigo-600" />,
                title: "Enterprise Security",
                description: "Bank-level security ensures your data is always protected and private."
              },
              {
                icon: <Users className="h-6 w-6 text-indigo-600" />,
                title: "Team Collaboration",
                description: "Work together seamlessly with real-time updates and communication tools."
              },
              {
                icon: <BarChart2 className="h-6 w-6 text-indigo-600" />,
                title: "Advanced Analytics",
                description: "Gain insights into your projects with comprehensive reporting and analytics."
              },
              {
                icon: <Clock className="h-6 w-6 text-indigo-600" />,
                title: "24/7 Support",
                description: "Our dedicated support team is always available to help you with any issues."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What our clients say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {[
                {
                  quote: "This platform has completely transformed how our team works together. The collaboration features are intuitive and powerful.",
                  author: "Jane Smith",
                  role: "CEO, TechCorp",
                  avatar: "JS"
                },
                {
                  quote: "The analytics dashboard gives us insights we never had before. We've been able to optimize our processes and increase productivity by 40%.",
                  author: "John Doe",
                  role: "CTO, StartupX",
                  avatar: "JD"
                },
                {
                  quote: "The customer support team is exceptional. They've been responsive and helpful every step of the way as we implemented the platform.",
                  author: "Sarah Johnson",
                  role: "Operations Director, GrowthCo",
                  avatar: "SJ"
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="border-0 shadow-md h-full">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          {Array(5).fill(0).map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 border-2 border-indigo-100">
                            <AvatarFallback className="bg-indigo-100 text-indigo-700">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-medium text-gray-900">{testimonial.author}</p>
                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0 mr-2" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden fees or complicated tiers. Choose the plan that works for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "per month",
                description: "Perfect for small teams and startups",
                features: [
                  "Up to 5 team members",
                  "10GB storage",
                  "Basic analytics",
                  "24/7 email support"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Professional",
                price: "$79",
                period: "per month",
                description: "Ideal for growing businesses",
                features: [
                  "Up to 20 team members",
                  "50GB storage",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations"
                ],
                cta: "Get Started",
                popular: true
              },
              {
                name: "Enterprise",
                price: "$199",
                period: "per month",
                description: "For large organizations",
                features: [
                  "Unlimited team members",
                  "500GB storage",
                  "Premium analytics",
                  "24/7 phone support",
                  "Custom integrations",
                  "Dedicated account manager"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl overflow-hidden ${
                  plan.popular 
                    ? "border-2 border-indigo-500 shadow-lg transform scale-105 md:scale-110 z-10" 
                    : "border border-gray-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 bg-indigo-500 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-indigo-500 shrink-0 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                          : "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-indigo-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-700 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by thousands</h2>
            <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
              Join the community of businesses that rely on our platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "500+", label: "Projects Completed" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-lg bg-indigo-700/30 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Brand</h3>
              <p className="mb-4">Building the future, one pixel at a time.</p>
              <div className="flex space-x-4 mt-6">
                {["Twitter", "LinkedIn", "GitHub"].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Releases</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add this at the end of your component to enable the blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Index;
