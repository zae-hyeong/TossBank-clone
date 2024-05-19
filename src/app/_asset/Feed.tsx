import Image from "next/image";
import Link from "next/link";
import feedImg1 from "@/public/image/feed/dummy-feed-cover-1.jpg";
import feedImg2 from "@/public/image/feed/dummy-feed-cover-2.jpg";
import feedImg3 from "@/public/image/feed/dummy-feed-cover-3.jpg";
import feedImg4 from "@/public/image/feed/dummy-feed-cover-4.jpg";
import feedImg5 from "@/public/image/feed/dummy-feed-cover-5.jpg";
import feedImg6 from "@/public/image/feed/dummy-feed-cover-6.jpg";

function MetaDataItem({
  content,
  className,
}: {
  content: string;
  className: string;
}) {
  return (
    <span className={`text-sm text-sub hover:text-white ${className}`}>
      {content}
    </span>
  );
}

export default function Feed() {
  return (
    <li className="w-full lg:w-80 group mb-10">
      <Link href={""}>
        <Image
          src={feedImg1}
          alt={""}
          className="w-full h-52 object-cover overflow-hidden rounded-2xl group-hover:-translate-y-2 transition-all"
        />
        <div className="flex mt-4">
          <MetaDataItem
            content={"토스뱅크 뉴스"}
            className={"after:content-['|'] after:mx-1 after:hover:text-sub"}
          ></MetaDataItem>
          <MetaDataItem content={"토스뱅크"} className={""}></MetaDataItem>
        </div>
        <h3 className="text-wrap break-keep text-white font-bold mt-1 mb-3 group-hover:text-main">
          대출금리, 고정금리와 변동금리 중 뭐가 좋을까요?
        </h3>
        <span className="text-sub">2024.05.14</span>
      </Link>
    </li>
  );
}
