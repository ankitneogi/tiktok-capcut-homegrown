import { CheckCircle, Zap, TrendingUp, Star } from "lucide-react";

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Official TikTok Partner",
      description: "Work directly with HOME, TikTok's trusted official partner for creator programs."
    },
    {
      icon: Zap,
      title: "Powered by CapCut",
      description: "Access exclusive CapCut creative tools, templates, and effects for viral content."
    },
    {
      icon: TrendingUp,
      title: "Proven Results: 1M+ Views",
      description: "Join creators who've already achieved viral success with our program guidance."
    },
    {
      icon: Star,
      title: "Limited & Exclusive",
      description: "A one-off opportunity available only to select creators in 4 countries."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            Why Join the <span className="text-mint">Program?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            This isn't just another creator program. It's your direct connection to TikTok's ecosystem through official channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-to-b from-muted/30 to-black/50 p-8 rounded-2xl border border-mint/20 hover:border-mint/40 transition-all duration-300 hover:shadow-mint"
              >
                <div className="w-16 h-16 bg-gradient-mint rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;