import AppDetails from "@/components/home-page/AppDetails";
import WhyBookWithOggo from "@/components/home-page/WhyBookWithOggo";
import ExclusiveHotelRecomandation from "@/components/hotels/home-page/ExclusiveHotelRecomandation";
import HotelCharacteristics from "@/components/hotels/home-page/HotelCharacteristics";
import HotelHomeHeroSection from "@/components/hotels/home-page/HotelHomeHeroSection";
import HotelPopularDestinations from "@/components/hotels/home-page/HotelPopularDestinations";
import PopularTourOprator from "@/components/hotels/home-page/PopularTourOprator";
import SpecialHotelOffers from "@/components/hotels/home-page/SpecialHotelOffers";
import TopRatedHotel from "@/components/hotels/home-page/TopRatedHotel";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default async function Home() {
  return (
    <div className=" w-full bg-[#FFFFFF]">
      <Header />
      <HotelHomeHeroSection />
      <HotelCharacteristics />
      <TopRatedHotel />
      <HotelPopularDestinations />
      <SpecialHotelOffers />
      <ExclusiveHotelRecomandation />
      <WhyBookWithOggo />
      <PopularTourOprator />
      <AppDetails />
      <Footer page="home" />
    </div>
  );
}
