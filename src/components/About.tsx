import { GraduationCap, Calendar, Award } from "lucide-react";

const About = () => {
  const education = [
    {
      level: "B.Tech (Data Science)",
      institution: "RGMCET",
      period: "2021 - 2025",
      grade: "82% (till 3rd year)",
      status: "Ongoing",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      level: "Plus 2 (Intermediate)",
      institution: "Narayana College",
      period: "2019 - 2021",
      grade: "92%",
      status: "Completed",
      icon: <Award className="w-6 h-6" />
    },
    {
      level: "10th Grade",
      institution: "Morning Star School",
      period: "2018 - 2019",
      grade: "95%",
      status: "Completed",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                About <span className="hero-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Data Science student pursuing my 4th year B.Tech with a passion for 
                turning complex data into actionable insights. My journey in technology is 
                driven by curiosity and the desire to create solutions that make a real impact.
              </p>
              
              <p>
                I enjoy developing web applications and have a great interest in solving 
                real-world problems using Machine Learning and Deep Learning techniques. 
                Currently, I am sharpening my problem-solving abilities with Data Structures 
                and Algorithms while building innovative projects.
              </p>

              <p>
                My approach combines technical expertise with creative thinking, allowing me 
                to bridge the gap between complex algorithms and user-friendly applications. 
                I believe in continuous learning and staying updated with the latest 
                technologies in the rapidly evolving field of data science.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">1</div>
                <div className="text-sm text-muted-foreground">Internship Experience</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-display font-bold">
                Educational <span className="hero-text">Journey</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{edu.level}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Ongoing' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-secondary/20 text-secondary'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <div className="text-muted-foreground">
                        <div className="font-medium">{edu.institution}</div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-primary">{edu.grade}</div>
                        {edu.status === 'Ongoing' && (
                          <span className="text-xs text-muted-foreground">(Current)</span>
                        )}
                      </div>
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

export default About;