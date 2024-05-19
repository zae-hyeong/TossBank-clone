import Link from "next/link";
import Image from "next/image";
import HeaderNavigationMenu from "@/public/class/HeaderNavigationMenu";

const navMenu = [
  new HeaderNavigationMenu({
    title: "통장",
    path: "/product-service/account",
    navId: "acc1",
  }),
  new HeaderNavigationMenu({
    title: "예금·적금",
    path: "/product-service/savings",
    navId: "de-sa",
  }),
  new HeaderNavigationMenu({
    title: "대출",
    path: "/product-service/loan",
    navId: "loan",
  }),
  new HeaderNavigationMenu({
    title: "외환",
    path: "/product-service/foreign-exchange",
    navId: "foreign-exchange",
  }),
  new HeaderNavigationMenu({
    title: "카드",
    path: "/product-service/card",
    navId: "card",
  }),
  new HeaderNavigationMenu({
    title: "은행소개",
    path: "/about/introduce",
    navId: "introduce",
  }),
  new HeaderNavigationMenu({
    title: "고객센터",
    path: "/customer",
    navId: "service",
  }),
  new HeaderNavigationMenu({ title: "채용", path: "/recruit", navId: "rec" }),
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
