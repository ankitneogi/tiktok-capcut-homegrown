import React from "react";

export default function VideoSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Hear From HOME's Leadership
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Get insights directly from our leadership team about the TikTok × CapCut Program and how it can transform your content creation journey.
            </p>
          </div>

          {/* Right Column: Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-black/20 border border-mint/10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/FcUjdP2Ir-0"
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
    </section>
  );
}
