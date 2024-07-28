"use client";

import Image, { StaticImageData } from "next/image";
import NextVideo from "next-video";
import titleImage from "@/img/account/account-general.png";
import benefitIconImage1 from "@/img/account/account-advantage-icon-1.png";
import benefitIconImage2 from "@/img/account/account-advantage-icon-2.png";
import benefitIconImage3 from "@/img/account/account-advantage-icon-3.png";
import MainLayout from "@/app/_UI/MainLayout";
import ArrowIcon from "@/public/svg/ArrowIcon";
import Footer from "@/app/_asset/Footer";
import React from "react";

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
        <div className="flex">
          <div className="w-96 h-96">
            <NextVideo
              // src={benefitVideo}
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
            <h3 className="whitespace-pre-line text-5xl font-bold mb-8 leading-snug -z-40">
              {"이제 큰 금액도\n간편하고 안전하게"}
            </h3>
            <span className="text-gray-700 whitespace-pre-line text-lg">{`1회 최대 10억원까지 돈을 보낼 수 있어요\nOTP 기기 없이 토스뱅크카드만 있으면 돼요`}</span>
          </div>
        </div>
      </MainLayout>
      <MainLayout>
        <div className="flex">
          <div>
            <h3 className="whitespace-pre-line text-5xl font-bold mb-8 leading-snug">
              {"모든 수수료 완전\n무료"}
            </h3>
            <span className="text-gray-700 whitespace-pre-line text-lg">
              {"송금, ATM 입출금, 증명서까지,\n어떤 수수료도 없어요."}
            </span>
          </div>
          <img
            width={384}
            height={384}
            src={"https://static.toss.im/3d/number-0-apng.png"}
            alt={""}
            className="w-96"
          />
        </div>
      </MainLayout>
      <ul className="mx-24 mt-36">
        <DetailDescription title={"상품안내"} />
        <DetailDescription title={"금리정보"} />
        <DetailDescription title={"수수료정보"} />
        <DetailDescription title={"기타사항"} />
        <DetailDescription title={"상품설명서 및 이용약관"} />
        <span className="text-sm text-gray-400 whitespace-pre-wrap">
          준법감시인 심의필 제240192호
          <br />
          (2024.02.02. ~ 2025.02.01.)
        </span>
      </ul>
      <div className="h-32 my-10"></div>
      <Footer />
    </>
  );
}

function DetailDescription(props: { title: string }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <li
        className="relative flex justify-between w-full rounded-lg bg-gray-100 p-5 my-2 hover:bg-gray-200"
        onClick={openHandler}
      >
        <h5 className="font-bold">{props.title}</h5>
        <div className={isOpen ? "w-6 h-6 rotate-180" : "w-6 h-6"}>
          <ArrowIcon />
        </div>
      </li>

      <div
        className={
          "relative w-full bg-gray-50 top-full left-0 mt-2 rounded-lg text-sm transition-all " +
          (isOpen ? "opacity-100 h-[300px]" : "opacity-0 h-0")
        }
      >
        <div className="p-5">
          <h6 className="font-bold mb-4">가입대상</h6>
          <span className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            exercitationem explicabo numquam in veritatis, inventore eius
            accusamus quis deleniti quibusdam doloremque omnis, accusantium ipsam
            dolor maiores, laudantium id assumenda quaerat!
          </span>
          <h6 className="font-bold my-4">예금종류</h6>
          <span className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            exercitationem explicabo numquam in veritatis, inventore eius
            accusamus quis deleniti quibusdam doloremque omnis, accusantium ipsam
            dolor maiores, laudantium id assumenda quaerat!
          </span>
          <h6 className="font-bold my-4">저축금액</h6>
          <span className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            exercitationem explicabo numquam in veritatis, inventore eius
            accusamus quis deleniti quibusdam doloremque omnis, accusantium ipsam
            dolor maiores, laudantium id assumenda quaerat!
          </span>
        </div>
      </div>
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
