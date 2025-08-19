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
              🎯 <strong>Data Science Student</strong> specializing in ML/AI solutions with hands-on experience in web development and problem-solving
            </p>
            
            <p className="mb-6">
              💡 Built <strong>intelligent applications</strong> including voice-based form filling, AI chatbots, and automated systems during my Infosys Springboard internship
            </p>
            
            <p>
              🚀 Passionate about transforming complex data into actionable insights and creating technology solutions that drive real business impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;