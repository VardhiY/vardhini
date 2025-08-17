import { ArrowRight, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/vardhini-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-background">
      {/* Geometric Background Elements */}
      <div className="geometric-shape top-10 right-20 w-32 h-32 rotate-45"></div>
      <div className="geometric-shape top-1/3 left-10 w-20 h-20 rotate-12"></div>
      <div className="geometric-shape bottom-20 right-1/3 w-28 h-28 -rotate-12"></div>
      
      {/* Floating Elements */}
      <div className="floating-element top-20 right-10 w-24 h-24 flex items-center justify-center">
        <span className="text-xs text-center font-semibold">Data Science<br />Student</span>
      </div>
      <div className="floating-element top-1/3 left-10 w-20 h-20 flex items-center justify-center">
        <span className="text-xs text-center font-semibold">ML<br />Enthusiast</span>
      </div>
      <div className="floating-element bottom-1/4 right-1/4 w-28 h-28 flex items-center justify-center">
        <span className="text-xs text-center font-semibold">Web<br />Developer</span>
      </div>

      <div className="relative section-padding flex items-center min-h-screen">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg font-medium">Hi, I am</p>
                <h1 className="text-5xl lg:text-7xl font-display font-bold">
                  <span className="hero-text">Yaddanapudi</span><br />
                  <span className="hero-text">Vardhini</span>
                  <span className="text-primary ml-4">→</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  Data Science Student | Web & ML Solutions Enthusiast
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Building intelligent solutions with code, data, and creativity. 
                Passionate about solving real-world problems using ML and DL techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => scrollToSection('#portfolio')}
                  className="group"
                >
                  View Portfolio
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Download className="mr-2" />
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <MessageCircle />
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="image-frame w-80 h-80 lg:w-96 lg:h-96 shadow-2xl">
                  <img 
                    src={profilePicture}
                    alt="Yaddanapudi Vardhini"
                    className="w-full h-full object-cover relative z-20"
                  />
                </div>
                
                {/* Floating Achievement Elements */}
                <div className="absolute -top-4 -left-4 floating-element w-16 h-16 flex items-center justify-center z-30">
                  <span className="text-xs text-center font-bold">4th<br />Year</span>
                </div>
                <div className="absolute -bottom-4 -right-4 floating-element w-20 h-20 flex items-center justify-center z-30">
                  <span className="text-xs text-center font-bold">82%<br />CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;