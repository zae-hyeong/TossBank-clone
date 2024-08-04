import { BannerI as BannerClassI } from "@/public/class/Banner";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

interface BannerI {
  banners: BannerClassI[];
}

export default function Banner({ banners }: BannerI): React.ReactNode {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      navigation={{
        prevEl: ".prev-banner",
        nextEl: ".next-banner",
      }}
      modules={[Navigation]}
      className="bg-white h-full"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <BannerItem banner={banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function BannerItem({
  banner,
}: Readonly<{
  banner: BannerClassI;
}>): React.ReactNode {
  return (
    <Link href={"#"}>
      <h1 className="whitespace-pre-line text-white text-5xl p-14 font-bold z-10 relative">
        {banner.title}
      </h1>
      {banner.subtitle && (
        <h2 className="text-sub pl-14 relative z-10">{banner.subtitle}</h2>
      )}
      <Image
        src={banner.imageData.src}
        alt={banner.imageData.alt}
        className="absolute h-full object-cover top-0"
      />
    </Link>
  );
}
