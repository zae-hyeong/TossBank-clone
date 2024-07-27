import Feed from "./Feed";
import { feedDatas } from "@/dummyData/dummyArticleData";

const feed = feedDatas;

export default function FeedLayout() {
  //TODO: use server request

  return (
    <div className="w-full">
      <h2 className="text-white font-bold text-2xl mt-16 mb-4">
        요즘 사람들의 금융 소식
      </h2>
      <ul className="flex flex-wrap justify-between">
        {feed.map((feed) => (
          <Feed feed={feed} key={feed.id} />
        ))}
        {feed.map((feed) => (
          <Feed feed={feed} key={feed.id} />
        ))}
        {feed.map((feed) => (
          <Feed feed={feed} key={feed.id} />
        ))}
        {feed.map((feed) => (
          <Feed feed={feed} key={feed.id} />
        ))}
      </ul>
    </div>
  );
}
