import { UserCheck, Palette, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserCheck,
      number: "01",
      title: "Apply through HOME",
      description: "Submit your application through HOME, TikTok's official partner with direct platform access.",
      highlight: "TikTok Partner"
    },
    {
      icon: Palette,
      number: "02", 
      title: "Create with CapCut",
      description: "Access exclusive CapCut templates, effects, and creative tools designed for viral content.",
      highlight: "Exclusive Tools"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Publish & Grow",
      description: "Publish to TikTok and watch your content reach new heights with program support.",
      highlight: "Go Viral"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-muted/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How It <span className="text-mint">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three simple steps to join the program and start creating viral content with official TikTok partner support.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-mint/50 via-mint to-mint/50 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-mint rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-mint rounded-full flex items-center justify-center">
                      <span className="text-mint text-xs font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-gradient-to-b from-muted/20 to-black/40 p-8 rounded-2xl border border-mint/20 group-hover:border-mint/40 transition-all duration-300">
                    <div className="mb-4">
                      <span className="inline-block bg-mint/20 text-mint text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {step.highlight}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-black/50 backdrop-blur-sm border border-mint/30 rounded-2xl px-8 py-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-mint rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-mint-light rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-mint-dark rounded-full border-2 border-black"></div>
            </div>
            <div className="text-left">
              <p className="text-white font-bold">Join 500+ creators</p>
              <p className="text-gray-400 text-sm">Already in the program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;