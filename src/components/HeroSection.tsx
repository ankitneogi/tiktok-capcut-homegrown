import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Trust Badge */}
        <div className="mb-8 inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-mint/20 rounded-full px-6 py-3">
          <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
          <span className="text-mint font-medium">HOME is an official TikTok partner</span>
        </div>

        {/* Logo Row */}
        <div className="flex items-center justify-center gap-2 md:gap-8 mb-12">
          <div className="text-white text-sm md:text-2xl font-bold bg-black/30 px-3 py-2 md:px-6 md:py-3 rounded-lg backdrop-blur-sm border border-mint/20">
            HOME
          </div>
          <div className="text-2xl md:text-4xl text-mint">×</div>
          <div className="text-white text-sm md:text-2xl font-bold bg-black/30 px-3 py-2 md:px-6 md:py-3 rounded-lg backdrop-blur-sm border border-mint/20">
            TikTok
          </div>
          <div className="text-2xl md:text-4xl text-mint">×</div>
          <div className="text-white text-sm md:text-2xl font-bold bg-black/30 px-3 py-2 md:px-6 md:py-3 rounded-lg backdrop-blur-sm border border-mint/20">
            CapCut
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white to-mint bg-clip-text text-transparent leading-tight">
          TikTok × CapCut
          <br />
          <span className="text-5xl md:text-7xl">Program</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Powered by CapCut. Delivered by <strong className="text-mint">HOME</strong>, an official TikTok partner.
        </p>

        {/* CTA Button */}
        <Button 
          variant="hero" 
          size="lg" 
          className="text-lg px-12 py-6 h-auto rounded-full"
        >
          Apply Now
        </Button>

        {/* Replaced Video Teaser with Text */}
        <div className="mt-16 relative max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-mint/20">
            The only program in which you earn by editing your content with CapCut, without new dedicated content needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
