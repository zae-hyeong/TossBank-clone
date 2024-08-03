import Image, { StaticImageData } from "next/image";
import titleImage from "@/img/account/account-general.png";
import benefitIconImage1 from "@/img/account/account-advantage-icon-1.png";
import benefitIconImage2 from "@/img/account/account-advantage-icon-2.png";
import benefitIconImage3 from "@/img/account/account-advantage-icon-3.png";
// import loopVideo from "@/video/";
import benefitImage from "@/img/account/account-advantage-2.png";
import MainLayout from "@/app/_UI/MainLayout";
import NextVideo from "next-video";

export default function Account() {
  return (
    <>
      <MainLayout className="bg-gray-200 pt-36">
        <h1 className="text-3xl text-black mb-8">토스뱅크 통장</h1>
        <h2 className="text-7xl whitespace-pre-wrap text-center font-bold leading-snug">
          {"하루만 넣어도\n이자가 쌓이는 통장"}
        </h2>
        <Image src={titleImage} alt={"통장 개설 화면"} className="w-96" />
      </MainLayout>
      <MainLayout className="mt-28 mb-11">
        <div className="flex flex-row-reverse">
          <div className="flex flex-col">
            <h3 className="whitespace-pre-line text-5xl font-bold mb-8 leading-snug">
              {"정해진 기간 없이\n하루만 넣어도"}
            </h3>
            <span className="text-gray-700">조건 없이(세전)</span>
            <span className="text-4xl font-semibold">연 2%</span>
          </div>
          <ul className="flex flex-col mr-24 justify-between">
            <SmallBenefitBanner
              img={benefitIconImage1}
              content={"정해진 만기조건 없음"}
            />
            <SmallBenefitBanner
              img={benefitIconImage2}
              content={"자유로운 입출금"}
            />
            <SmallBenefitBanner
              img={benefitIconImage3}
              content={"어디서든 ATM 출금 무료"}
            />
          </ul>
        </div>
      </MainLayout>
      <MainLayout>
        <div className="flex mt-10">
          <div className="w-96 h-96">
            <NextVideo
              src={"/video/account-advantage-1.mp4"}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="h-full"
            ></NextVideo>
          </div>
          <div>
            <h3 className="whitespace-pre-line text-5xl font-bold mb-8 leading-snug">
              {"이제 큰 금액도\n간편하고 안전하게"}
            </h3>
            <span className="text-gray-700 whitespace-pre-line text-lg">{`1회 최대 10억원까지 돈을 보낼 수 있어요\nOTP 기기 없이 토스뱅크카드만 있으면 돼요`}</span>
          </div>
        </div>
      </MainLayout>
      <MainLayout>
        <div className="flex mt-10">
          <div>
            <h3 className="whitespace-pre-line text-5xl font-bold mb-8 leading-snug">
              {"모든 수수료 완전\n무료"}
            </h3>
            <span className="text-gray-700 whitespace-pre-line text-lg">
              {"송금, ATM 입출금, 증명서까지,\n어떤 수수료도 없어요."}
            </span>
          </div>
          <img
            src={"https://static.toss.im/3d/number-0-apng.png"}
            alt={""}
            className="w-96"
          />
        </div>
      </MainLayout>
      {/* TODO: 펼쳐지도록 만들기 */}
      <div className="mx-24 mt-36"><div className="w-full rounded-lg bg-gray-100 p-5 hover:bg-gray-200">
        <h5 className="font-bold">상품안내</h5>
      </div></div>
      
    </>
  );
}

function SmallBenefitBanner({
  img,
  content,
}: {
  img: StaticImageData;
  content: string;
}) {
  return (
    <li className="bg-gray-100 rounded-lg flex items-center py-4 px-6">
      <Image src={img} alt={content} className="w-8 h-8 mr-6" />
      <span className="font-bold">{content}</span>
    </li>
  );
}
