import { Play, Eye, Heart, Share2 } from "lucide-react";

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "Swim Glowup",
      views: "1.2M views in 3 days",
      engagement: "45K",
      type: "Transformation",
      gradient: "from-blue-500/20 to-mint/20"
    },
    {
      title: "AI Miss Universe",
      views: "+20k followers gained",
      engagement: "89K",
      type: "AI Content",
      gradient: "from-purple-500/20 to-mint/20"
    },
    {
      title: "Ghibli Filters",
      views: "Viral across TikTok",
      engagement: "156K", 
      type: "Filter Effect",
      gradient: "from-green-500/20 to-mint/20"
    },
    {
      title: "Trending Dance",
      views: "850K views",
      engagement: "67K",
      type: "Dance Trend",
      gradient: "from-pink-500/20 to-mint/20"
    },
    {
      title: "POV Story CapCut Edit",
      views: "10K shares",
      engagement: "234K",
      type: "Storytelling",
      gradient: "from-orange-500/20 to-mint/20"
    },
    {
      title: "Creative Transition Reel",
      views: "2.1M verified views",
      engagement: "145K",
      type: "Transitions",
      gradient: "from-red-500/20 to-mint/20"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Creator <span className="text-mint">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real creators. Real results. See how the TikTok x CapCut Program has helped creators go viral and build their audiences.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {stories.slice(0, 3).map((story, index) => (
            <MobileVideoCard key={index} story={story} />
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {stories.slice(3, 6).map((story, index) => (
            <MobileVideoCard key={index + 3} story={story} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
            {stories.map((story, index) => (
              <div key={index} className="flex-none w-80 snap-center">
                <MobileVideoCard story={story} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">Ready to be the next success story?</p>
          <div className="inline-flex items-center gap-4 bg-gradient-mint/10 border border-mint/30 rounded-2xl px-8 py-4">
            <div className="w-3 h-3 bg-mint rounded-full animate-pulse"></div>
            <span className="text-mint font-bold">Applications open now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileVideoCard = ({ story }: { story: any }) => {
  return (
    <div className="group relative">
      {/* Mobile Frame */}
      <div className="relative bg-black rounded-[3rem] p-2 border-4 border-gray-800 shadow-2xl">
        <div className="relative bg-gradient-to-b from-black to-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/16] border border-gray-700">
          {/* Video Content Area */}
          <div className={`absolute inset-0 bg-gradient-to-b ${story.gradient} flex items-center justify-center`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-mint/20 transition-colors duration-300 cursor-pointer">
                <Play className="w-8 h-8 text-mint fill-mint" />
              </div>
              <p className="text-white/80 text-sm">{story.type}</p>
            </div>
          </div>

          {/* TikTok UI Elements */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-xs font-bold">Live</span>
            </div>
            <div className="text-right">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Bottom UI */}
          <div className="absolute bottom-4 left-4 right-20">
            <h3 className="text-white font-bold text-lg mb-2">{story.title}</h3>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{story.views}</span>
              </div>
            </div>
          </div>

          {/* Side Actions */}
          <div className="absolute right-3 bottom-20 space-y-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xs">{story.engagement}</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xs">Share</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-mint/0 group-hover:bg-mint/10 rounded-[3rem] transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default SuccessStoriesSection;