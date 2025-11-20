
import BuyingWay from "@/Client/BuyingWay";
import FirstSection from "@/Client/FirstSection";
import IntroProducts from "@/Client/IntroProducts";
import OurClientReview from "@/Client/OurClientReview";
import StorySection from "@/Client/OurStory";
import PoplarItems from "@/Client/PoplarItems";
import SearchAndPopularSection from "@/Client/SearchAndPopularSection";
import TryAiSection from "@/Client/TryAiSection";

function Home() {
  return (
    <div className="flex gap-10 flex-col items-center w-full">
      <FirstSection />
      <SearchAndPopularSection />
      <PoplarItems />
      <IntroProducts />
      <TryAiSection />
      <OurClientReview />
      <BuyingWay />
      <StorySection />
    </div>
  );
}


export default Home
