import { BannerI } from "@/public/class/Banner";
import Link from "next/link";
import Image from "next/image";

export default function BannerItem({
  banner,
  className,
  position,
  unableTransition
}: Readonly<{
  banner: BannerI;
  className?: string;
  position: number;
  unableTransition: boolean;
}>): React.ReactNode {
  return (
    <li
      style={unableTransition ? {translate: `${position}%`} : {translate: `${position}%`, transition: 'translate ease-in-out 0.8s'}}
      className={`w-full h-full shrink-0 absolute ${className}`}
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
    </li>
  );
}
