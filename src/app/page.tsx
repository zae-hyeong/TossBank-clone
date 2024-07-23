import MainLayout from "./_UI/MainLayout";
import BannerLayout from "./_asset/BannerLayout";
import FeedLayout from "./_asset/FeedLayout";
import Footer from "./_asset/Footer";

export default function Home() {
  return (
    <div className="bg-black flex-center w-full flex-col">
      <div className="bg-black flex-center flex-col md:w-[664px] lg:w-[1008px] xl:w-[1352px] px-auto">
        <BannerLayout />
        <FeedLayout />
      </div>
      <Footer />
    </div>
  );
}
