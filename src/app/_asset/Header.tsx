"use client";

import Link from "next/link";
import Image from "next/image";
import Menu, { MenuI } from "@/public/class/Menu";
import { useState } from "react";
import SubmenuLayout from "./SubmenuLayout";

const navMenu = [
  new Menu({
    title: "통장",
    path: "/product-service",
    navId: "acc1",
    submenus: [
      {
        submenuTitle: "통장",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "토스뱅크 통장", path: "/account", navId: "asdf1" }),
          new Menu({ title: "나눠모으기 통장", path: "/2", navId: "asdf2" }),
          new Menu({ title: "모임 통장", path: "/3", navId: "asdf3" }),
          new Menu({ title: "서브 통장", path: "/4", navId: "asdf4" }),
          new Menu({ title: "법인 통장", path: "/5", navId: "asdf5" }),
          new Menu({ title: "아이 통장", path: "/6", navId: "asdf6" }),
        ],
      },
    ],
  }),
  new Menu({
    title: "예금·적금",
    path: "/product-service/savings",
    navId: "de-sa",
    submenus: [
      {
        submenuTitle: "예금",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({
            title: "이자 받는 정기예금",
            path: "/11",
            navId: "asdf11",
          }),
          new Menu({ title: "정기예금", path: "/12", navId: "asdf12" }),
        ],
      },
      {
        submenuTitle: "적금",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "키워봐요적금", path: "/21", navId: "asdf21" }),
          new Menu({ title: "굴비적금", path: "/22", navId: "asdf22" }),
          new Menu({ title: "자유적금", path: "/23", navId: "asdf23" }),
          new Menu({ title: "아이적금", path: "/24", navId: "asdf24" }),
        ],
      },
    ],
  }),
  new Menu({
    title: "대출",
    path: "/product-service/loan",
    navId: "loan",
    submenus: [
      {
        submenuTitle: "대출",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "신용대출", path: "/11", navId: "asdf11" }),
          new Menu({ title: "마이너스통장", path: "/12", navId: "asdf12" }),
          new Menu({ title: "비상금 대출", path: "/13", navId: "asdf13" }),
          new Menu({ title: "전월세보증금대출", path: "/14", navId: "asdf14" }),
          new Menu({ title: "사장님대출", path: "/15", navId: "asdf15" }),
          new Menu({
            title: "사장님마이너스통장",
            path: "/16",
            navId: "asdf16",
          }),
        ],
      },
      {
        submenuTitle: "갈아타기",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({
            title: "신용대출 갈아타기",
            path: "/21",
            navId: "asdf21",
          }),
          new Menu({
            title: "전월세보증금대출 갈아타기",
            path: "/22",
            navId: "asdf22",
          }),
          new Menu({ title: "사장님대환대출", path: "/23", navId: "asdf23" }),
        ],
      },
    ],
  }),
  new Menu({
    title: "외환",
    path: "/product-service/foreign-exchange",
    navId: "foreign-exchange",
    submenus: [
      {
        submenuTitle: "외환",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "외화통장", path: "/1", navId: "asdf1" }),
        ],
      },
    ],
  }),
  new Menu({
    title: "카드",
    path: "/product-service",
    navId: "card",
    submenus: [
      {
        submenuTitle: "카드",
        submenuPath: "/card",
        submenuItems: [
          new Menu({ title: "체크카드", path: "/1", navId: "asdf1" }),
          new Menu({ title: "모임카드", path: "/2", navId: "asdf2" }),
        ],
      },
    ],
  }),
  new Menu({
    title: "고객센터",
    path: "/customer",
    navId: "service",
    submenus: [
      {
        submenuTitle: "이용안내",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "공지사항", path: "/11", navId: "asdf11" }),
          new Menu({ title: "자주 묻는 질문", path: "/12", navId: "asdf12" }),
          new Menu({ title: "이용시간 안내", path: "/13", navId: "asdf13" }),
          new Menu({ title: "금리 안내", path: "/14", navId: "asdf14" }),
          new Menu({ title: "수수료 안내", path: "/15", navId: "asdf15" }),
          new Menu({ title: "ATM 이용 안내", path: "/16", navId: "asdf16" }),
        ],
      },
      {
        submenuTitle: "소비자보호",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "소비자보호체계", path: "/21", navId: "asdf21" }),
          new Menu({ title: "소비자보호공시", path: "/22", navId: "asdf22" }),
          new Menu({
            title: "금융감독원 금융정보",
            path: "/23",
            navId: "asdf23",
          }),
          new Menu({
            title: "금융사기피해 예방 및 대응",
            path: "/24",
            navId: "asdf24",
          }),
          new Menu({ title: "고객정보보호정책", path: "/25", navId: "asdf25" }),
        ],
      },
      {
        submenuTitle: "자료실",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "증명서 진위 확인", path: "/31", navId: "asdf31" }),
          new Menu({ title: "약관", path: "/32", navId: "asdf32" }),
          new Menu({ title: "서식", path: "/33", navId: "asdf33" }),
          new Menu({ title: "상품설명서", path: "/34", navId: "asdf34" }),
          new Menu({ title: "상품공시실", path: "/35", navId: "asdf35" }),
        ],
      },
    ],
  }),
  new Menu({
    title: "은행소개",
    path: "/about/introduce",
    navId: "introduce",
    submenus: [
      {
        submenuTitle: "은행소개",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "공시정보", path: "/11", navId: "asdf11" }),
          new Menu({ title: "재무정보", path: "/12", navId: "asdf12" }),
          new Menu({ title: "공고", path: "/13", navId: "asdf13" }),
          new Menu({ title: "사업공고", path: "/14", navId: "asdf14" }),
          new Menu({ title: "오시는 길", path: "/15", navId: "asdf15" }),
        ],
      },
      {
        submenuTitle: "주주사소개",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "주주사소개", path: "/21", navId: "asdf21" }),
        ],
      },
      {
        submenuTitle: "윤리강령",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "윤리강령", path: "/31", navId: "asdf31" }),
        ],
      },
    ],
  }),
  new Menu({
    title: "채용",
    path: "/recruit",
    navId: "rec",
    submenus: [
      {
        submenuTitle: "토스뱅크 채용",
        submenuPath: "/savings",
        submenuItems: [
          new Menu({ title: "채용 중 공고", path: "/1", navId: "asdf1" }),
          new Menu({
            title: "토스뱅크 더 알아보기",
            path: "/2",
            navId: "asdf2",
          }),
        ],
      },
    ],
  }),
];

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeSubmenus, setActiveSubmenus] = useState({submenuRootPath:'', submenus: navMenu[0].submenus});

  const headerMouseEvent = {
    mouseOverHandler() {
      setIsActive(true);
    },
    mouseLeaveHandler() {
      setIsActive(false);
    },
  };

  const menuMouseEvent = {
    mouseOverHandler(menu: MenuI) {
      setActiveSubmenus({submenuRootPath: menu.path, submenus: menu.submenus});
    },
  };

  return (
    <>
      <header
        onMouseOver={headerMouseEvent.mouseOverHandler}
        onMouseLeave={headerMouseEvent.mouseLeaveHandler}
        className={`w-full h-16 fixed z-10 transition ${
          isActive ? "bg-black" : "bg-black/85"
        }`}
      >
        <nav className="h-full flex justify-center items-center">
          <ul className="h-full flex text-sub relative items-center">
            <HeaderLogo />
            <NavigationMenu onMouseOver={menuMouseEvent.mouseOverHandler} />
            <SubmenuLayout isActive={isActive} submenus={activeSubmenus.submenus} rootPath={activeSubmenus.submenuRootPath} />
          </ul>
        </nav>
        <div
          className={`transition-all ${
            isActive ? "bg-black h-[300px]" : "bg-black/85 h-[0px]"
          }`}
        ></div>
      </header>
      {isActive && <div className="fixed w-screen h-screen bg-black/40"></div>}
    </>
  );
}

function HeaderLogo() {
  return (
    <li className="mr-5 h-5">
      <Link href={"/"}>
        <Image
          src={"svg/logo-bank-mono-light.svg"}
          alt={"헤더 로고"}
          width={118}
          height={20}
        />
      </Link>
    </li>
  );
}

function NavigationMenu({
  onMouseOver,
}: {
  onMouseOver: (menu: MenuI) => void; 
}) {
  return (
    <>
      {navMenu.map((menu) => (
        <li
          key={menu.navId}
          onMouseOver={() => {
            onMouseOver(menu);
          }}
          className="mr-7 text-sm hover:text-white cursor-pointer"
        >
          {menu.title}
        </li>
      ))}
    </>
  );
}
