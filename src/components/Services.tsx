import { Globe, Brain, Code, Database, Smartphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design & Development",
      description: "Professional, responsive websites with modern design principles and optimal user experience.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      color: "from-primary to-primary/80"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ML Solutions",
      description: "Building intelligent models and applications to solve real-world problems using cutting-edge AI.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Custom AI Models"
      ],
      color: "from-secondary to-secondary/80"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with comprehensive analysis and visualization.",
      features: [
        "Data Cleaning & Processing",
        "Statistical Analysis",
        "Data Visualization",
        "Business Intelligence"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and requirements.",
      features: [
        "Full-stack Development",
        "API Integration",
        "Database Design",
        "System Architecture"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices with mobile-first approach.",
      features: [
        "Progressive Web Apps",
        "Mobile Optimization",
        "Touch-friendly Interface",
        "Cross-platform Compatibility"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Analytics",
      description: "Data-driven insights to help businesses make informed decisions and grow strategically.",
      features: [
        "Market Analysis",
        "Performance Metrics",
        "Trend Identification",
        "Strategic Planning"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              My <span className="hero-text">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions from web development to AI implementation, 
              tailored to bring your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                    onClick={scrollToContact}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 glass-card rounded-2xl p-12">
            <h3 className="text-3xl font-display font-bold">
              Ready to Start Your <span className="hero-text">Project?</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate to transform your ideas into reality. Whether you need a website, 
              an AI solution, or data analysis, I'm here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
              >
                Start a Project
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;