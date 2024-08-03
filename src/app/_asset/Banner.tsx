import { useRef } from "react";
import BannerItem from "./BannerItem";
import BannerClass from "@/public/class/Banner";
import { BannerI as BannerClassI } from "@/public/class/Banner";

interface BannerI {
  offset: number;
  banners: BannerClassI[];
  unableTransition: boolean;
}

export default function Banner({
  offset,
  banners,
  unableTransition
}: BannerI): React.ReactNode {

  return (
    <ul className="flex w-full h-full">
      {banners.map((banner, index) => {
        return (
          <BannerItem
            banner={banner}
            key={banner.id}
            position={100 * (index - offset)}
            unableTransition={unableTransition}
          />
        );
      })}
    </ul>
  );
}
