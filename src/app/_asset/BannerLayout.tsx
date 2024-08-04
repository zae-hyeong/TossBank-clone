"use client";

import Banner from "./Banner";
import BannerClass from "@/public/class/Banner";
import bannerImg1 from "@/img/banner/dummy-bankfeed-banner-1.jpg";
import bannerImg2 from "@/img/banner/dummy-bankfeed-banner-2.jpg";
import bannerImg3 from "@/img/banner/dummy-bankfeed-banner-3.jpg";
import ImageData from "@/public/class/ImagaData";
import { useEffect, useState } from "react";
import Image from "next/image";

function BannerNavigationButton({
  iconPath,
  iconAlt,
  className,
}: Readonly<{
  iconPath: string;
  iconAlt: string;
  className: string;
}>): React.ReactNode {
  return (
    <div
      className={
        className +
        " w-[64px] h-[64px] relative rounded-full bg-white/30 mr-3 flex items-center justify-center cursor-pointer z-20"
      }
    >
      <Image src={iconPath} alt={iconAlt} width={44} height={44} />
    </div>
  );
}

export default function BannerLayout() {
  const [banners, setBanners] = useState<BannerClass[]>([]);
  const [hasBanner, setHasBanner] = useState<boolean>(false);

  useEffect(() => {
    //원래는 서버에서 데이터 받아오고 앞뒤에 복사본을 붙이는 과정이 필요함
    setBanners([
      new BannerClass({
        title: "천만을 넘어 모두를 위해\n은행을 바꾸는 은행",
        imageData: new ImageData(bannerImg1, "first banner"),
      }),
      new BannerClass({
        title: "믿을 수 있는\n전세대출의 시작",
        subtitle: "토스뱅크 전월세보증금대출",
        imageData: new ImageData(bannerImg2, "second banner"),
      }),
      new BannerClass({
        title: "살 때도 팔 때도\n환전수수료 없는",
        subtitle: "토스뱅크 외화통장",
        imageData: new ImageData(bannerImg3, "third banner"),
      }),
    ]);
    setHasBanner(true);
  }, []);

  return (
    <article className="w-full md:h-[400px] lg:h-[440px] relative overflow-hidden rounded-3xl mt-24">
      {hasBanner && <Banner banners={banners} />}
      <div className="flex absolute bottom-0 p-14">
        <BannerNavigationButton
          className={"prev-banner"}
          iconPath="svg/prev-icon.svg"
          iconAlt={"next banner"}
        />
        <BannerNavigationButton
          className={"next-banner"}
          iconPath="svg/next-icon.svg"
          iconAlt={"previous banner"}
        />
      </div>
    </article>
  );
}
