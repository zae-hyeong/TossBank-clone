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
  const [bannerOffset, setBannerOffset] = useState(1);
  const [banners, setBanners] = useState<BannerClass[]>([]);
  const [hasBanner, setHasBanner] = useState<boolean>(false);

  const [unableTransition, setUnableTransition] = useState<boolean>(false);

  useEffect(() => {
    //원래는 서버에서 데이터 받아오고 앞뒤에 복사본을 붙이는 과정이 필요함
    setBanners([
      new BannerClass({
        title: "3. 살 때도 팔 때도\n환전수수료 없는",
        subtitle: "토스뱅크 외화통장",
        imageData: new ImageData(bannerImg3, "third banner"),
      }),
      new BannerClass({
        title: "1. 천만을 넘어 모두를 위해\n은행을 바꾸는 은행",
        imageData: new ImageData(bannerImg1, "first banner"),
      }),
      new BannerClass({
        title: "2. 믿을 수 있는\n전세대출의 시작",
        subtitle: "토스뱅크 전월세보증금대출",
        imageData: new ImageData(bannerImg2, "second banner"),
      }),
      new BannerClass({
        title: "3. 살 때도 팔 때도\n환전수수료 없는",
        subtitle: "토스뱅크 외화통장",
        imageData: new ImageData(bannerImg3, "third banner"),
      }),
      new BannerClass({
        title: "1. 천만을 넘어 모두를 위해\n은행을 바꾸는 은행",
        imageData: new ImageData(bannerImg1, "first banner"),
      }),
    ]);
    setHasBanner(true); //배너가 없으면 오류처리 필요
  }, []);

  const bannerHandler = {
    moveNext() {
      if (bannerOffset + 1 < banners.length - 1) {
        setBannerOffset((bannerOffset) => bannerOffset + 1);
      } else {
        //TODO: state 변경 함수가 async하게 동작해서 순차적으로 동작을 안함
        setBannerOffset((bannerOffset) => bannerOffset + 1);
        setUnableTransition(true);
        setBannerOffset(0);
        setUnableTransition(false);
        setBannerOffset((bannerOffset) => bannerOffset + 1);
      }
    },
    movePrev() {
      if (bannerOffset - 2 >= 0) {
        setBannerOffset((bannerOffset) => bannerOffset - 1);
      } else {
        setBannerOffset((bannerOffset) => bannerOffset - 1);
        setUnableTransition(true);
        setBannerOffset(banners.length - 1);
        setUnableTransition(false);
        setBannerOffset((bannerOffset) => bannerOffset - 1);
      }
    },
  };

  return (
    <article className="w-full md:h-[400px] lg:h-[440px] relative overflow-hidden rounded-3xl mt-24">
      {hasBanner && <Banner offset={bannerOffset} banners={banners} unableTransition={unableTransition} />}
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
