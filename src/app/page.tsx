import AirlinePartners from "@/components/home-page/AirlinePartners";
import AppDetails from "@/components/home-page/AppDetails";
import Characteristics from "@/components/home-page/Characteristics";
import Hero from "@/components/home-page/Hero";
import PopularDestiontion from "@/components/home-page/PopularDestination";
import Slider from "@/components/home-page/Slider";
import TopFlightRoute from "@/components/home-page/TopFlightRoute";
import WhyBookWithOggo from "@/components/home-page/WhyBookWithOggo";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default async function Home() {
  return (
    <div className=" w-full bg-[#FFFFFF]">
      <Header />
      <Hero />
      <Slider />
      <Characteristics />
      <TopFlightRoute />
      <PopularDestiontion />
      <WhyBookWithOggo />
      <AppDetails />
      <AirlinePartners />
      <Footer page="home" />
    </div>
  );
}
