import Image from "next/image";
import Link from "next/link";
import feedImg1 from "@/public/image/feed/dummy-feed-cover-1.jpg";
import feedImg2 from "@/public/image/feed/dummy-feed-cover-2.jpg";
import feedImg3 from "@/public/image/feed/dummy-feed-cover-3.jpg";
import feedImg4 from "@/public/image/feed/dummy-feed-cover-4.jpg";
import feedImg5 from "@/public/image/feed/dummy-feed-cover-5.jpg";
import feedImg6 from "@/public/image/feed/dummy-feed-cover-6.jpg";
import Feed from "./Feed";

export default function FeedLayout() {
  return (
    <div className="w-full">
      <h2 className="text-white font-bold text-2xl mt-16 mb-4">요즘 사람들의 금융 소식</h2>
      <ul className="flex flex-wrap justify-between">
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </ul>
    </div>
  );
}
