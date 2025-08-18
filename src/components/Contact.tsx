import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_cx5r8s9';
  const EMAILJS_TEMPLATE_ID = 'template_doiz2n9';
  const EMAILJS_USER_ID = 'jb3_ecPWyMWMxt68p';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vardhini'
        },
        EMAILJS_USER_ID
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "vardhini@email.com",
      href: "mailto:vardhini@email.com",
      color: "from-primary to-primary/80"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 XXX XXX XXXX",
      href: "tel:+91XXXXXXXXXX",
      color: "from-secondary to-secondary/80"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Quora",
      href: "https://quora.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Let's <span className="hero-text">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your project and bring your ideas to life. 
              I'm always excited to take on new challenges and create innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass-card rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card rounded-xl p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  Currently Available
                </h4>
                <p className="text-muted-foreground text-sm">
                  Open for internships, freelance projects, and collaboration opportunities. 
                  Typically respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold">Send a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 min-h-[120px] resize-none"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;