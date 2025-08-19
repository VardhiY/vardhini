import { Code, Database, Brain, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary to-primary/80",
      skills: ["Python", "Java (DSA)", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Data & ML Libraries",
      icon: <Database className="w-6 h-6" />,
      color: "from-secondary to-secondary/80",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow"]
    },
    {
      title: "Core Expertise",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["Web Development", "Machine Learning", "Data Analysis", "Problem Solving", "UI/UX Design"]
    },
    {
      title: "Tools & Technologies",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      skills: ["Git & GitHub", "VS Code", "Jupyter Notebook", "API Development", "Database Management"]
    }
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Technical <span className="hero-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-full text-sm font-medium transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">8+</div>
              <div className="text-sm text-muted-foreground">Libraries & Frameworks</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-purple-500">3+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-yellow-500">10+</div>
              <div className="text-sm text-muted-foreground">Tools & Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;