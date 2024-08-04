import { BannerI } from "@/public/class/Banner";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export default function BannerItem({
  banner,
}: Readonly<{
  banner: BannerI;
}>): React.ReactNode {
  return (
    <SwiperSlide
      className={`w-full h-full`}
    >
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
    </SwiperSlide>
  );
}
