import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-mint relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-black rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-black rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-black rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-0 w-36 h-36 bg-black rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm border border-black/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-black" />
            <span className="text-black font-bold">Official Partnership</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight">
            Be Part of the
            <br />
            <span className="text-black/70">TikTok × CapCut</span>
            <br />
            Program
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join the exclusive creator program that combines TikTok's platform power with CapCut's creative tools, delivered by HOME.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              variant="outline-mint" 
              size="lg" 
              className="text-xl px-16 py-8 h-auto rounded-full border-black text-black hover:bg-black hover:text-mint group"
            >
              Apply Now
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <div className="bg-black/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-black/20">
              <span className="text-black font-bold text-lg">HOME</span>
            </div>
            <div className="text-3xl text-black/40">×</div>
            <div className="bg-black/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-black/20">
              <span className="text-black font-bold text-lg">TikTok</span>
            </div>
            <div className="text-3xl text-black/40">×</div>
            <div className="bg-black/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-black/20">
              <span className="text-black font-bold text-lg">CapCut</span>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="flex items-center justify-center gap-8 text-black/70 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/50 rounded-full"></div>
              <span>Official TikTok Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/50 rounded-full"></div>
              <span>Exclusive CapCut Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/50 rounded-full"></div>
              <span>Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/50 rounded-full"></div>
              <span>Limited Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20" viewBox="0 0 1440 120" fill="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#000000"/>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTASection;