import { BannerI } from "@/public/class/Banner";
import Link from "next/link";
import Image from "next/image";

export default function BannerItem({
  banner,
  className
}: Readonly<{ banner: BannerI, className: string }>): React.ReactNode {
  return (
    <li className={`w-full h-full shrink-0 transition absolute ${className}`}>
      <Image
        src={banner.imageData.src}
        alt={banner.imageData.alt}
        className="absolute -z-10 h-full object-cover"
      />
      <Link href={"#"}>
        <h1 className=" whitespace-pre-line text-red text-white text-5xl p-14 font-bold">
          {banner.title}
        </h1>
        {banner.subtitle && <h2 className="text-sub pl-14">{banner.subtitle}</h2>}
      </Link>
    </li>
  );
}
