import BannerItem from "./BannerItem";
import { BannerI as BannerClassI } from "@/public/class/Banner";

interface BannerI {
  bannerOrder: { prev: number; current: number; next: number };
  banners: BannerClassI[];
}

export default function Banner({
  bannerOrder,
  banners,
}: BannerI): React.ReactNode {
  return (
    <ul className="flex w-full h-full">
      {banners.map((banner, index) => {
        if (index === bannerOrder.prev)
          return (
            <BannerItem
              banner={banner}
              key={banner.id}
              className="-translate-x-full"
            />
          );
        if (index === bannerOrder.current)
          return <BannerItem banner={banner} key={banner.id} className="" />;
        if (index === bannerOrder.next)
          return (
            <BannerItem
              banner={banner}
              key={banner.id}
              className="translate-x-full"
            />
          );
      })}
    </ul>
  );
}
