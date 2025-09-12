import { Button } from "@/components/ui/button";
import { Clock, Globe, TrendingUp, Users } from "lucide-react";

const LimitedOpportunitySection = () => {
  const eligibility = [
    {
      icon: Globe,
      title: "US, UK, Germany & France",
      description: "Available to creators in these 4 countries only"
    },
    {
      icon: TrendingUp,
      title: "20K+ Views Per Video",
      description: "Consistent performance required"
    },
    {
      icon: Users,
      title: "Growth-Focused Creators",
      description: "Ambitious creators seeking visibility"
    },
    {
      icon: Clock,
      title: "Limited Time Only",
      description: "One-off program with exclusive access"
    }
  ];

  return (
    <section className="py-24 bg-gradient-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mint rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Limited Opportunity</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            A One-Off, Limited Program
            <br />
            <span className="text-black">Delivered by HOME</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            This exclusive partnership between TikTok and CapCut is available for a limited time through HOME's official channels.
          </p>
        </div>

        {/* Eligibility Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eligibility.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-black text-white mb-2">500+</div>
            <p className="text-white/80">Creators Applied</p>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-black text-white mb-2">50M+</div>
            <p className="text-white/80">Total Views Generated</p>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-black text-white mb-2">4</div>
            <p className="text-white/80">Countries Available</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-black/40 backdrop-blur-sm border border-white/30 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg mb-6">
              Don't miss this exclusive opportunity to work directly with TikTok's official partner.
            </p>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto rounded-full bg-white text-black hover:bg-mint hover:shadow-glow"
            >
              Apply Now - Limited Spots
            </Button>
            
            <p className="text-white/70 text-sm mt-4">
              Applications reviewed within 48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOpportunitySection;