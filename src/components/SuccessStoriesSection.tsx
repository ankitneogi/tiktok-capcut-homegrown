import { Play, Eye, Heart, Share2 } from "lucide-react";

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "Swim Glowup",
      views: "1.2M views in 3 days",
      engagement: "45K",
      type: "TikTok",
      videoId: "7521517452514331917",
      gradient: "from-blue-500/20 to-mint/20"
    },
    {
      title: "AI Miss Universe",
      views: "+20k followers gained", 
      engagement: "89K",
      type: "TikTok",
      videoId: "7525482001982295318",
      gradient: "from-purple-500/20 to-mint/20"
    },
    {
      title: "Ghibli Filters",
      views: "Viral across TikTok",
      engagement: "156K", 
      type: "TikTok",
      videoId: "7532641811492261134",
      gradient: "from-green-500/20 to-mint/20"
    },
    {
      title: "Trending Dance",
      views: "850K views",
      engagement: "67K",
      type: "TikTok",
      videoId: "7533397043235032333",
      gradient: "from-pink-500/20 to-mint/20"
    },
    {
      title: "POV Story CapCut Edit",
      views: "10K shares",
      engagement: "234K",
      type: "TikTok",
      videoId: "7543735414755069215",
      gradient: "from-orange-500/20 to-mint/20"
    },
    {
      title: "Creative Transition Reel",
      views: "2.1M verified views",
      engagement: "145K",
      type: "TikTok",
      videoId: "7547042807316679959",
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
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {stories.slice(0, 3).map((story, index) => (
            <MobileVideoCard key={index} story={story} />
          ))}
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {stories.slice(3, 6).map((story, index) => (
            <MobileVideoCard key={index + 3} story={story} />
          ))}
        </div>

        {/* Tablet Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <MobileVideoCard key={index} story={story} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory px-4">
            {stories.map((story, index) => (
              <div key={index} className="flex-none w-72 snap-center">
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
  const renderVideoEmbed = () => {
    if (story.type === "YouTube") {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${story.videoId}?autoplay=0&mute=1&controls=1&showinfo=0&rel=0`}
          className="absolute inset-0 w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <iframe
          src={`https://www.tiktok.com/embed/v2/${story.videoId}?lang=en-US`}
          className="absolute inset-0 w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
  };

  return (
    <div className="group relative">
      {/* Mobile Frame */}
      <div className="relative bg-black rounded-[3rem] p-2 border-4 border-gray-800 shadow-2xl">
        <div className="relative bg-gradient-to-b from-black to-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/16] border border-gray-700">
          {/* Video Content Area */}
          <div className="relative w-full h-full">
            {renderVideoEmbed()}
            
            {/* Overlay for mobile styling */}
            <div className={`absolute inset-0 bg-gradient-to-b ${story.gradient} opacity-20 pointer-events-none`}></div>
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