import Link from "next/link";
import Image from "next/image";
import Menu from "@/public/class/Menu";

const navMenu = [
  new Menu({
    title: "통장",
    path: "/product-service/account",
    navId: "acc1",
    subMenus: [
      {
        subTitle: "통장",
        menus: [
          new Menu({ title: "토스뱅크 통장", path: "/1", navId: "asdf1" }),
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
    subMenus: [
      {
        subTitle: "예금",
        menus: [
          new Menu({
            title: "이자 받는 정기예금",
            path: "/11",
            navId: "asdf11",
          }),
          new Menu({ title: "정기예금", path: "/12", navId: "asdf12" }),
        ],
      },
      {
        subTitle: "적금",
        menus: [
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
    subMenus: [
      {
        subTitle: "대출",
        menus: [
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
        subTitle: "갈아타기",
        menus: [
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
    subMenus: [
      {
        subTitle: "외환",
        menus: [new Menu({ title: "외화통장", path: "/1", navId: "asdf1" })],
      },
    ],
  }),
  new Menu({
    title: "카드",
    path: "/product-service/card",
    navId: "card",
    subMenus: [
      {
        subTitle: "카드",
        menus: [
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
    subMenus: [
      {
        subTitle: "이용안내",
        menus: [
          new Menu({ title: "공지사항", path: "/11", navId: "asdf11" }),
          new Menu({ title: "자주 묻는 질문", path: "/12", navId: "asdf12" }),
          new Menu({ title: "이용시간 안내", path: "/13", navId: "asdf13" }),
          new Menu({ title: "금리 안내", path: "/14", navId: "asdf14" }),
          new Menu({ title: "수수료 안내", path: "/15", navId: "asdf15" }),
          new Menu({ title: "ATM 이용 안내", path: "/16", navId: "asdf16" }),
        ],
      },
      {
        subTitle: "소비자보호",
        menus: [
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
        subTitle: "자료실",
        menus: [
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
    subMenus: [
      {
        subTitle: "은행소개",
        menus: [
          new Menu({ title: "공시정보", path: "/11", navId: "asdf11" }),
          new Menu({ title: "재무정보", path: "/12", navId: "asdf12" }),
          new Menu({ title: "공고", path: "/13", navId: "asdf13" }),
          new Menu({ title: "사업공고", path: "/14", navId: "asdf14" }),
          new Menu({ title: "오시는 길", path: "/15", navId: "asdf15" }),
        ],
      },
      {
        subTitle: "주주사소개",
        menus: [
          new Menu({ title: "주주사소개", path: "/21", navId: "asdf21" }),
        ],
      },
      {
        subTitle: "윤리강령",
        menus: [new Menu({ title: "윤리강령", path: "/31", navId: "asdf31" })],
      },
    ],
  }),
  new Menu({
    title: "채용",
    path: "/recruit",
    navId: "rec",
    subMenus: [
      {
        subTitle: "토스뱅크 채용",
        menus: [
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
  return (
    <header className="w-full h-16 bg-black opacity-85 fixed z-10">
      <nav className="h-full flex justify-center items-center">
        <Link href={"/"} className="mr-5">
          <Image
            src={"svg/logo-bank-mono-light.svg"}
            alt={"헤더 로고"}
            width={118}
            height={20}
          />
        </Link>
        <ul className="flex text-sub">
          {navMenu.map((menu) => (
            <li key={menu.navId} className="mr-5">
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
