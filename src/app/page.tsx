import bannerImg1 from "@/img/banner/dummy-bankfeed-banner-1.jpg";
import bannerImg2 from "@/img/banner/dummy-bankfeed-banner-2.jpg";
import bannerImg3 from "@/img/banner/dummy-bankfeed-banner-3.jpg";
import Banner from "@/public/class/Banner";
import Link from "next/link";
import Image from 'next/image'

const banners = [
  new Banner({
    title: "천만을 넘어 모두를 위해\n은행을 바꾸는 은행",
    image: bannerImg1,
  }),
  new Banner({
    title: "믿을 수 있는\n전세대출의 시작",
    subtitle: "토스뱅크 전월세보증금대출",
    image: bannerImg2,
  }),
  new Banner({
    title: "살 때도 팔 때도\n환전수수료 없는",
    subtitle: "토스뱅크 외화통장",
    image: bannerImg3,
  }),
];

export default function Home() {
  return (
    <main>
      <article className="w-full md:w-[664px] md:h-[400px] lg:w-[1008px] lg:h-[440px] 2xl:w-[1352px] relative">
        <ul>
          <li>
            <Image src={bannerImg1} alt={'배너이미지'} className="absolute rounded-3xl -z-10 h-full" />
            <Link href={"#"}>
              <h1 className=" whitespace-pre-line text-red text-white text-5xl">{banners[0].title}</h1>
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
