import { Play, Users } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Hear From <span className="text-mint">HOME's Leadership</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our Head of Growth explains why TikTok trusts HOME to deliver exclusive creator programs and drive real results.
          </p>
        </div>

        <div className="relative">
          {/* Video Container */}
          <div className="relative bg-black rounded-3xl overflow-hidden border-2 border-mint/30 shadow-2xl">
            <div className="aspect-video bg-gradient-teal relative">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto hover:bg-mint/20 transition-colors duration-300 cursor-pointer">
                    <Play className="w-10 h-10 text-mint fill-mint" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Video from Head of Growth at HOME</h3>
                  <p className="text-white/80">Click to watch the full program overview</p>
                </div>
              </div>
              
              {/* Video Overlay Info */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3">
                <Users className="w-5 h-5 text-mint" />
                <span className="text-white text-sm font-medium">Official TikTok Partner</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-mint text-sm font-bold">▶ 3:24</span>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300 italic">
              "HOME's partnership with TikTok gives creators unprecedented access to platform insights and exclusive opportunities that simply aren't available elsewhere."
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-mint rounded-full"></div>
              <div className="text-left">
                <p className="text-white font-bold">Sarah Chen</p>
                <p className="text-gray-400 text-sm">Head of Growth, HOME</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;