import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
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
    <section id="education" className="section-padding relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Educational <span className="hero-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground">
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1 space-y-2 text-left">
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
    </section>
  );
};

export default Education;