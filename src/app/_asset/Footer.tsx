import Link from "next/link";
import * as React from "react";

export default function Footer() {
  return (
    <div className="border-t w-full border-gray-800 text-gray-500 pt-12 pb-20 px-10">
      <div className="flex text-sm">
        <div className="flex flex-col mr-12">
          <FooterTitle>고객센터</FooterTitle>
          <FooterLink>전화 : 1661-7654(24시간 연중무휴)</FooterLink>
          <FooterLink>해외전화 : +82-2-6975-9000</FooterLink>
          <FooterLink>이메일 : help@tossbank.com</FooterLink>
        </div>
        <div className="flex flex-col">
          <FooterTitle>서비스</FooterTitle>
          <FooterLink>토스뱅크 기업뱅킹</FooterLink>
        </div>
      </div>
      <div className="mt-10 text-xs">
        <FooterTitle>토스뱅크㈜</FooterTitle>
        <div className="text-xs visited:no-underline leading-5 text-gray-400 whitespace-nowrap">
          사업자 등록번호 : 462-86-01671 | 대표 : 이은미 06133 서울특별시 강남구
          <br />
          테헤란로 131, 13층 (역삼동, 한국지식재산센터)
        </div>
      </div>
      <div className="mt-6 text-xs flex flex-wrap max-w-[560px]">
        <Link
          href={"#"}
          className="text-white leading-7 w-1/4 visited:no-underline hover:underline"
        >
          개인정보 처리방침
        </Link>
        <FooterLink className="block w-1/4">보호금융상품등록부</FooterLink>
        <FooterLink className="block w-1/4">이용자유의사항</FooterLink>
        <FooterLink className="block w-1/4">공지사항</FooterLink>
        <FooterLink className="block w-1/4">상품공시실</FooterLink>
        <FooterLink className="block w-1/4">경영공시</FooterLink>
      </div>
    </div>
  );
}

function FooterTitle(props: { children: string }) {
  return (
    <p className="text-sm font-semibold text-white/85 leading-10">
      {props.children}
    </p>
  );
}

function FooterLink(props: { children: string; className?: string }) {
  return (
    <Link
      href={"#"}
      className={
        "visited:no-underline hover:text-blue-800 hover:underline leading-7 " +
        props.className
      }
    >
      {props.children}
    </Link>
  );
}
