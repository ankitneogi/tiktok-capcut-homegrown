import { Play, Users } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Hear From <span className="text-mint">HOME's Leadership</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Our Head of Growth explains why TikTok trusts HOME to deliver exclusive creator programs and drive real results.
          </p>
        </div>

        {/* Text and Video Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Block */}
          <div className="order-1 md:order-1">
            <div className="bg-gradient-to-r from-mint/10 to-transparent border border-mint/20 rounded-2xl p-6 md:p-8">
              <p className="text-lg md:text-2xl text-white font-bold leading-relaxed">
                The only program in which you earn by editing your content with CapCut, without new dedicated content needed.
              </p>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="order-2 md:order-2">
            <div className="relative bg-black rounded-3xl overflow-hidden border-2 border-mint/30 shadow-2xl">
              <div className="aspect-[9/16] md:aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/FcUjdP2Ir-0"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Video Overlay Info */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3">
                <Users className="w-5 h-5 text-mint" />
                <span className="text-white text-sm font-medium">Official TikTok Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;