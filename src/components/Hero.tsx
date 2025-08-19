import { ArrowRight, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-background">
      <div className="relative section-padding flex items-center min-h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profilePicture}
                  alt="Yaddanapudi Vardhini"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-display font-bold">
                <span className="hero-text">Yaddanapudi Vardhini</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Data Science Student | Web & ML Solutions Enthusiast
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary text-muted-foreground">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary text-muted-foreground">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;