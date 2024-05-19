import { FeedI } from "@/public/class/Feed";
import Image from "next/image";
import Link from "next/link";

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

export default function Feed({feed}: {feed:FeedI}) {
  return (
    <li className="w-full lg:w-80 group mb-10">
      <Link href={feed.link}>
        <Image
          src={feed.thumbnail.src}
          alt={feed.thumbnail.alt}
          className="w-full h-52 object-cover overflow-hidden rounded-2xl group-hover:-translate-y-2 transition-all"
        />
        <div className="flex mt-4">
          <MetaDataItem
            content={feed.category}
            className={"after:content-['|'] after:mx-1 after:hover:text-sub"}
          ></MetaDataItem>
          <MetaDataItem content={feed.site} className={""}></MetaDataItem>
        </div>
        <h3 className="text-wrap break-keep text-white font-bold mt-1 mb-3 group-hover:text-main">
          {feed.title}
        </h3>
        <span className="text-sub">{`${feed.date?.getFullYear()}.${feed.date?.getMonth()}.${feed.date?.getDate()}`}</span>
      </Link>
    </li>
  );
}
