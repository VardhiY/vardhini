import { ExternalLink, Github, Play, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Vanifill App",
      category: "AI/ML Application",
      description: "Revolutionary voice-based form filling solution that leverages Natural Language Processing to streamline data entry processes. Built during my Infosys Springboard internship.",
      features: [
        "Voice Recognition Technology",
        "Natural Language Processing",
        "Real-time Form Population",
        "Multi-language Support",
        "Web-based Interface"
      ],
      technologies: ["Python", "NLP", "Speech Recognition", "Flask", "JavaScript"],
      status: "Live Project",
      color: "from-primary to-primary/80",
      highlights: "Internship Project • Voice AI • NLP"
    },
    {
      title: "HealthAI Chatbot",
      category: "Healthcare AI",
      description: "Intelligent healthcare assistant that analyzes symptoms and provides personalized diet recommendations and medicine suggestions using advanced machine learning algorithms.",
      features: [
        "Symptom Analysis Engine",
        "Personalized Diet Plans",
        "Medicine Recommendations",
        "Health Risk Assessment",
        "24/7 Availability"
      ],
      technologies: ["Python", "Machine Learning", "Healthcare APIs", "Chatbot Framework", "Data Science"],
      status: "In Development",
      color: "from-secondary to-secondary/80",
      highlights: "Healthcare AI • Personalized Medicine • ML"
    },
    {
      title: "Meme Generator",
      category: "Creative Technology",
      description: "AI-powered creative application that generates contextually relevant memes from uploaded images using computer vision and natural language generation.",
      features: [
        "Image Analysis",
        "Context Recognition",
        "Automated Text Generation",
        "Multiple Meme Formats",
        "Social Media Integration"
      ],
      technologies: ["Python", "Computer Vision", "Image Processing", "AI/ML", "Web Development"],
      status: "Completed",
      color: "from-purple-500 to-pink-500",
      highlights: "Creative AI • Computer Vision • Entertainment"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Featured <span className="hero-text">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative projects that demonstrate my expertise in 
              AI, web development, and creative problem-solving
            </p>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center glass-card rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Completed Projects</div>
            </div>
            <div className="text-center glass-card rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Used</div>
            </div>
            <div className="text-center glass-card rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-500 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">AI/ML Focused</div>
            </div>
            <div className="text-center glass-card rounded-xl p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">1</div>
              <div className="text-sm text-muted-foreground">Internship Project</div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className={`glass-card rounded-2xl p-8 lg:p-12 hover:scale-[1.02] transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Project Visual */}
                  <div className="relative">
                    <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white relative overflow-hidden`}>
                      {/* Project Mockup Placeholder */}
                      <div className="text-center space-y-4">
                        <div className="text-4xl font-bold">{project.title}</div>
                        <div className="text-sm opacity-80">{project.category}</div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live Project' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : project.status === 'In Development'
                            ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary font-medium">{project.highlights}</span>
                      </div>
                      <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full flex-shrink-0`}></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <div className="text-center space-y-6 glass-card rounded-2xl p-12">
            <h3 className="text-3xl font-display font-bold">
              Interested in My <span className="hero-text">Work?</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These projects represent just a glimpse of what's possible. 
              Let's discuss how we can bring your ideas to life with innovative solutions.
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
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;