import React from "react";

export default function VideoSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6 lg:order-1 order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Hear From HOME's Leadership
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Join the TikTok × CapCut Monetization Program 🎉 Create your usual content with CapCut, post with program hashtags, and earn up to $2,000 per video - all powered by TikTok and managed by HOME.
            </p>
          </div>

          {/* Right Column: Video */}
          <div className="relative lg:order-2 order-1">
            <div className="w-full max-w-xs mx-auto bg-background rounded-[2rem] p-4 shadow-glow border border-mint/20">
              <div className="relative">
                {/* Phone notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-muted rounded-full z-10"></div>
                
                {/* Video container with 9:16 aspect ratio */}
                <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-background border border-border">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/FcUjdP2Ir-0?modestbranding=1&showinfo=0&rel=0"
                    title="Hear From HOME's Leadership"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
