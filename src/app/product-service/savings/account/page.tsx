import Image, { StaticImageData } from "next/image";
import titleImage from "@/img/account/account-general.png";
import benefitIconImage1 from "@/img/account/account-advantage-icon-1.png";
import benefitIconImage2 from "@/img/account/account-advantage-icon-2.png";
import benefitIconImage3 from "@/img/account/account-advantage-icon-3.png";
import benefitImage from "@/img/account/account-advantage-2.png";
import MainLayout from "@/app/_UI/MainLayout";

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
        <video width="320" height="240" loop >
          <source src="/public/video/account-advantage-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </MainLayout>
      <MainLayout>
        <div className="flex">
          <div>
            <h3 className="whitespace-pre-line">{"모든 수수료 완전\n무료"}</h3>
            <span className="text-gray-700 whitespace-pre-line">
              {"송금, ATM 입출금, 증명서까지,\n어떤 수수료도 없어요."}
            </span>
          </div>
          {/* <Image src={benefitImage} alt={""} /> */}
        </div>
      </MainLayout>
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
