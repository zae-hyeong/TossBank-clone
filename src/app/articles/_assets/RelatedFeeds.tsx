import Feed from "@/app/_asset/Feed";
import { feedDatas } from "@/ServerRequest/dummyArticleData";
import * as React from "react";

export interface IRelatedFeedsProps {}

const relatedFeeds = [feedDatas[0], feedDatas[1], feedDatas[2]];

export default function RelatedFeeds(props: IRelatedFeedsProps) {
  return (
    <div className="mt-44 py-20 bg-white/5 flex flex-col content-center items-center">
      <div className="max-w-5xl">
        <h4 className="w-full text-2xl font-bold mb-8 text-white">연관 콘텐츠</h4>
        <ul className="flex">
          {relatedFeeds.map((feed) => (
            <li key={feed.id} className="pr-5 last:pr-0">
              <Feed feed={feed} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
