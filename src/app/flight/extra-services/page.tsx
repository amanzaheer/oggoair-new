import ExtraServicesBody from "@/components/flights/extraServices/ExtraServicesBody";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ExtraSearvicesHeroSection from "@/components/flights/extraServices/ExtraServiceHeroSection";

export default function ExtraServices() {
  return (
    <div className=" bg-white w-full">
      <Header />
      <div className="w-full xl:w-[1220px] 2xl:w-[1420px] mx-auto flex justify-between items-center mt-5">
        <div className=" w-full mt-20">
          <ExtraSearvicesHeroSection />
          <ExtraServicesBody />
        </div>
      </div>
      <Footer />
    </div>
  );
}
