import MainLayout from "./_UI/MainLayout";
import BannerLayout from "./_asset/BannerLayout";
import FeedLayout from "./_asset/FeedLayout";

export default function Home() {
  return (
    <MainLayout  bgColor="bg-black">
      <BannerLayout />
      <FeedLayout />
    </MainLayout>
  );
}
