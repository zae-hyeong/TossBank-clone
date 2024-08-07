import feedImg1 from "@/public/image/feed/dummy-feed-cover-1.jpg";
import feedImg2 from "@/public/image/feed/dummy-feed-cover-2.jpg";
import feedImg3 from "@/public/image/feed/dummy-feed-cover-3.jpg";
import feedImg4 from "@/public/image/feed/dummy-feed-cover-4.jpg";
import feedImg5 from "@/public/image/feed/dummy-feed-cover-5.jpg";
import feedImg6 from "@/public/image/feed/dummy-feed-cover-6.jpg";
import feedImg7 from "@/public/image/feed/dummy-feed-cover-7.jpg";
import newsImg1 from "@/img/feed/dummy-news-cover-1.jpg"
import newsImg2 from "@/img/feed/dummy-news-cover-2.png"
import { default as FeedData } from "@/public/class/Feed";
import ImageData from "@/public/class/ImagaData";


export const feedDatas = [
  new FeedData({
    title: "대출금리, 고정금리와 변동금리 중 뭐가 좋을까요?",
    category: "대출",
    site: "토스뱅크",
    thumbnail: new ImageData(feedImg1, "feed1"),
    link: "loaninterest2",
  }),
  new FeedData({
    title: "미국, 이더리움 현물 ETF 승인...비트코인 후 6개월만",
    category: "투자",
    site: "한경BUSINESS",
    thumbnail: new ImageData(newsImg1, "news 1"),
    link: "https://magazine.hankyung.com/business/article/202407233109b",
    isExternalLink: true,
  }),
  new FeedData({
    title: "코스피 코스닥 차이를 알아보아요",
    category: "투자",
    site: "토스뱅크",
    thumbnail: new ImageData(feedImg2, "feed2"),
    link: "kospikosdaq",
  }),
  new FeedData({
    title: "2024년 종합소득세 신고 총정리(기간, 방법, 환급)",
    category: "일상",
    site: "토스뱅크",
    thumbnail: new ImageData(feedImg3, "feed3"),
    link: "#",
  }),
  new FeedData({
    title: "금리 인하 불확실성, 이렇게 준비해 보세요",
    category: "글로벌",
    site: "토스뱅크",
    thumbnail: new ImageData(feedImg4, "feed4"),
    link: "#",
  }),
  new FeedData({
    title: "한국장학재단 생활비대출을 알아보아요",
    category: "대출",
    site: "토스뱅크",
    thumbnail: new ImageData(feedImg5, "feed5"),
    link: "#",
  }),
  new FeedData({
    title: "고금리로 어깨 무거운 사장님, 토스뱅크로 갈아타세요",
    category: "대출",
    site: "토스뱅크",
    thumbnail: new ImageData(feedImg6, "feed6"),
    link: "#",
  }),
  new FeedData({
    title: `토스뱅크 "올 1분기 중저신용자 비중 36.33%"`,
    category: "토스뱅크 뉴스",
    site: "아주경제",
    thumbnail: new ImageData(newsImg2, "news 2"),
    link: "https://www.ajunews.com/view/20240524152137141",
    isExternalLink: true,
  }),
  new FeedData({
    title: "로또·연금복권 담첨번호, 확률, 실수령액을 알아보아요",
    category: "일상",
    site: "토스뱅크",
    thumbnail: new ImageData(feedImg7, "feed7"),
    link: "#",
  }),
];