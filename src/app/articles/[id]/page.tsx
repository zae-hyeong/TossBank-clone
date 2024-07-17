import MainLayout from "@/app/_UI/MainLayout";
import Image from "next/image";
import * as React from "react";
import { feedDatas } from "@/ServerRequest/dummyArticleData";

export interface ILoanInterest2Props {
  params: { id: string };
}

const text1 = `1. 대출금리는 크게 고정금리 방식, 변동금리 방식, 혼합금리 방식의 세 가지로 나눌 수 있어요.
            2. 일반적으로 시장금리 인상기에는 고정금리 대출이, 인하기에는 변동금리 대출이 유리해요.
            3. 혼합금리는 고객의 자금계획에 맞춰 운용할 수 있다는 장점이 있어요.
            우리나라의 가계대출 비율 GDP 대비 98.9%를 차지할 만큼, 대출은 우리의 삶과 밀접해요. 특히 대출을 고려 중이라면 대출금리에 대한 이해가 중요한데요. 함께 살펴볼까요?`
const text2 = `일반적으로 대출금리는 ‘기준금리+가산금리'로 이루어져요. 이 두 가지를 더한 금리에서, 은행이 주는 우대금리를 빼면 여러분이 받는 대출 금리가 되어요.
이때 은행이 기준으로 삼는 기준금리에는 COFIX, CD금리, 금융채 금리 등 다양한 종류가 있는데요. 대출의 종류에 따라 기준금리도 달라져요.`

export default function LoanInterest2(props: ILoanInterest2Props) {
  const feed = feedDatas.find((feed) => props.params.id === feed.link);
  if (feed === undefined) return <></>;

  return (
    <MainLayout className=" text-white pt-16">
      <Image src={feed.thumbnail.src} alt={feed?.thumbnail.alt} className="w-full rounded-2xl mt-10 mb-16"/>
      <div>
        <div><span className="">대출</span><span>토스뱅크</span></div>
        <h1 className="text-4xl font-semibold mb-10">{feed.title}</h1>
        
        <div>
          <SubTitle content={"📌 고정금리 변동금리 3줄 요약"} />
          <Body content={text1}/>
        </div>
        <div>
          <SubTitle content={"🧮 대출금리는 어떻게 계산되어요?"} />
          <Body content={text2}/>
          <SubText content={"*대출금리의 계산법을 더 자세히 알고 싶다면, 이 콘텐츠를 읽어보세요."} />
        </div>
      </div>
    </MainLayout>
  );
}

function SubTitle(props: {content: string}): React.ReactNode {
  return (<h2 className="text-2xl font-semibold leading-10 mb-4">{props.content}</h2>);
}

function Body(props: {content: string}): React.ReactNode {
  return <span className="leading-10 whitespace-pre-line">{props.content}</span>
}

function SubText(props: {content: string}): React.ReactNode {
  return <span className="text-xs text-gray-500">{props.content}</span>
}