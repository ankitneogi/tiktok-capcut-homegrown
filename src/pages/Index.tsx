import HeroSection from "@/components/HeroSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import VideoSection from "@/components/VideoSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LimitedOpportunitySection from "@/components/LimitedOpportunitySection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyJoinSection />
      <VideoSection />
      <SuccessStoriesSection />
      <HowItWorksSection />
      <LimitedOpportunitySection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
