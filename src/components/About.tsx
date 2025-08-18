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
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              About <span className="hero-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          <div className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p className="mb-6">
              I am a Data Science student pursuing my 4th year B.Tech with a passion for 
              turning complex data into actionable insights. My journey in technology is 
              driven by curiosity and the desire to create solutions that make a real impact.
            </p>
            
            <p>
              I'm passionate about leveraging technology to solve real-world problems and am constantly 
              exploring new ways to apply machine learning and data science in meaningful applications.
            </p>
          </div>

          {/* Achievements */}
          <div className="pt-8">
            <div className="glass-card rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Award className="w-6 h-6 text-primary" />
                <div className="text-center">
                  <div className="font-semibold">2nd Prize - Technical Quiz</div>
                  <div className="text-sm text-muted-foreground">Problem Solving and Analytics Competition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;