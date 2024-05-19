"use client";

import Banner from "./Banner";
import BannerClass from "@/public/class/Banner";
import bannerImg1 from "@/img/banner/dummy-bankfeed-banner-1.jpg";
import bannerImg2 from "@/img/banner/dummy-bankfeed-banner-2.jpg";
import bannerImg3 from "@/img/banner/dummy-bankfeed-banner-3.jpg";
import ImageData from "@/public/class/ImagaData";
import { useState } from "react";
import Image from "next/image";

const banners = [
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
];

function BannerNavigationButton({
  iconPath,
  iconAlt,
  onClick,
}: Readonly<{
  iconPath: string;
  iconAlt: string;
  onClick: () => void;
}>): React.ReactNode {
  return (
    <div
      onClick={onClick}
      className="w-[64px] h-[64px] relative rounded-full bg-white/30 mr-3 flex items-center justify-center cursor-pointer"
    >
      <Image src={iconPath} alt={iconAlt} width={44} height={44} />
    </div>
  );
}

export default function BannerLayout() {
  //TODO: 배너가 없을때 오류처리
  const [bannerOrder, setBannerOrder] = useState({
    prev: banners.length >= 1 ? banners.length - 1 : 0,
    current: 0,
    next: banners.length >= 1 ? 1 : 0,
  });

  const bannerHandler = {
    moveNext() {
      console.log(bannerOrder);
      setBannerOrder((bannerOrder) => ({
        prev: bannerOrder.current,
        current: bannerOrder.next,
        next: bannerOrder.next + 1 >= banners.length ? 0 : bannerOrder.next + 1,
      }));
    },
    movePrev() {
      setBannerOrder((bannerOrder) => ({
        prev: bannerOrder.prev - 1 >= 0 ? bannerOrder.prev - 1 : banners.length - 1,
        current: bannerOrder.prev,
        next: bannerOrder.current,
      }));
    },
  };

  return (
    <article className="w-full md:w-[664px] md:h-[400px] lg:w-[1008px] lg:h-[440px] 2xl:w-[1352px] relative overflow-hidden rounded-3xl">
      <Banner bannerOrder={bannerOrder} banners={banners} />
      <div className="flex absolute bottom-0 p-14">
        <BannerNavigationButton
          iconPath="svg/prev-icon.svg"
          iconAlt={"next banner"}
          onClick={bannerHandler.movePrev}
        />
        <BannerNavigationButton
          iconPath="svg/next-icon.svg"
          iconAlt={"previous banner"}
          onClick={bannerHandler.moveNext}
        />
      </div>
    </article>
  );
}
