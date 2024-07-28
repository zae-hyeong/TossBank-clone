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

export default function Feed({ feed }: { feed: FeedI }) {
  return (
    <li className="w-full lg:w-80 group mb-10">
      <Link href={feed.isExternalLink ? feed.link : `articles/${feed.link}`}>
        <div
          className={
            "w-full h-52 relative transition-all group-hover:-translate-y-2"
          }
        >
          <Image
            src={feed.thumbnail.src}
            alt={feed.thumbnail.alt}
            className="w-full h-52 object-cover overflow-hidden rounded-2xl"
          />
          {feed.isExternalLink && (
            <div className="absolute w-full h-full top-0 transition-all opacity-0 hover:opacity-100 hover:bg-black/40">
              <div className="absolute-center text-sm text-white font-bold inline-block px-3 py-4 bg-gray-400/65 rounded-3xl">
                웹사이트 이동
              </div>
            </div>
          )}
        </div>
        <div className="flex mt-4">
          <MetaDataItem
            content={feed.category}
            className={"after:content-['|'] after:mx-1 after:hover:text-sub"}
          ></MetaDataItem>
          <MetaDataItem content={feed.site} className={""}></MetaDataItem>
        </div>
        <h3 className="text-wrap break-keep text-white font-bold mt-1 mb-3 transition-all group-hover:text-main">
          {feed.title}
        </h3>
        <span className="text-sub">{`${feed.date?.getFullYear()}.${feed.date?.getMonth()}.${feed.date?.getDate()}`}</span>
      </Link>
    </li>
  );
}
