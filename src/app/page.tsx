import BannerLayout from "./_asset/BannerLayout";
import FeedLayout from "./_asset/FeedLayout";

export default function Home() {
  return(
    <main className="flex flex-col justify-center items-center md:w-[664px] lg:w-[1008px] 2xl:w-[1352px] mx-auto">
      <BannerLayout/>
      <FeedLayout />
    </main>
  );
}
