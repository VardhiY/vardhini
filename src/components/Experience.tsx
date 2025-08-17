import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const projects = [
    {
      title: "Vanifill App",
      description: "Voice/Text-based form filling solution using NLP",
      tech: ["Python", "NLP", "Voice Recognition", "Web Development"],
      category: "AI/ML Project"
    },
    {
      title: "HealthAI Chatbot",
      description: "AI-powered chatbot that suggests diet & medicine based on symptoms",
      tech: ["Python", "Machine Learning", "Healthcare AI", "Chatbot"],
      category: "Healthcare AI"
    },
    {
      title: "Meme Generator",
      description: "Creative application that generates memes from uploaded pictures",
      tech: ["Python", "Image Processing", "Web Development", "API Integration"],
      category: "Creative Tech"
    }
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Professional <span className="hero-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in technology through internships and hands-on projects
            </p>
          </div>

          {/* Internship Experience */}
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">AI & ML Intern</h3>
                    <div className="text-primary font-semibold text-lg">Infosys Springboard</div>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Internship Program</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Key Achievement</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed <strong className="text-primary">Vanifill</strong>, an innovative 
                    voice-based form filling application using Natural Language Processing. 
                    This project demonstrated my ability to combine AI technologies with 
                    practical user applications, showcasing expertise in voice recognition, 
                    NLP, and web development.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Artificial Intelligence", "Machine Learning", "Natural Language Processing", 
                     "Voice Recognition", "Python Programming", "Project Management"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="group">
                  View Internship Details
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl lg:text-4xl font-display font-bold">
                Featured <span className="hero-text">Projects</span>
              </h3>
              <p className="text-muted-foreground">
                Practical applications of my skills in real-world scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;