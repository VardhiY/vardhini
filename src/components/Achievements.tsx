import { Award, Trophy, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "2nd Prize - Technical Quiz",
      description: "Problem Solving and Analytics Competition",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="achievements" className="section-padding relative">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              <span className="hero-text">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and awards that highlight my expertise
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;