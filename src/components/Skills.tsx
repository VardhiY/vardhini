import { Code, Database, Brain, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary to-primary/80",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java (DSA)", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Data & ML Libraries",
      icon: <Database className="w-6 h-6" />,
      color: "from-secondary to-secondary/80",
      skills: [
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Scikit-learn", level: 75 },
        { name: "TensorFlow", level: 70 }
      ]
    },
    {
      title: "Core Expertise",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Web Development", level: 92 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis", level: 88 },
        { name: "Problem Solving", level: 90 },
        { name: "UI/UX Design", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "API Development", level: 80 },
        { name: "Database Management", level: 75 }
      ]
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
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
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