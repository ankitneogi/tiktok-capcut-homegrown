import React from "react";

const successStories = [
  {
    id: 1,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7521517452514331917",
  },
  {
    id: 2,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7525482001982295318",
  },
  {
    id: 3,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7532641811492261134",
  },
  {
    id: 4,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7533397043235032333",
  },
  {
    id: 5,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7543735414755069215",
  },
  {
    id: 6,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7547042807316679959",
  },
];

function MobileVideoCard({ url }: { url: string }) {
  return (
    <div className="w-full max-w-xs mx-auto bg-background rounded-[2rem] p-4 shadow-glow border border-mint/20">
      <div className="relative">
        {/* Phone notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-muted rounded-full z-10"></div>
        
        {/* Video container with 9:16 aspect ratio */}
        <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-background">
          <iframe
            src={url}
            title="Success Story Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}

export default function SuccessStoriesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
          Creator Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {successStories.map((story) => (
            <MobileVideoCard key={story.id} url={story.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
