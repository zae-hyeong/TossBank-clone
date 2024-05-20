import { MenuI } from "@/public/class/Menu";
import Link from "next/link";

export default function SubmenuLayout({
  isActive,
  submenus,
}: {
  isActive: boolean;
  submenus: { submenuTitle: string; submenuItems: MenuI[] }[] | undefined;
}) {
  return (
    <li className="w-full absolute top-full">
      <ul
        className={`w-full absolute top-full transition-all flex overflow-hidden ${
          isActive ? "" : "opacity-0 h-0"
        }`}
      >
        {submenus?.map((submenu) => (
          <Submenu key={submenu.submenuTitle} submenu={submenu} />
        ))}
      </ul>
    </li>
  );
}

function Submenu({
  submenu,
}: {
  submenu: { submenuTitle: string; submenuItems: MenuI[] };
}) {
  return (
    <li className="w-1/3">
      <Link href={submenu.submenuItems[0].path}>
        <span className="block text-sm text-sub my-2 hover:text-main">
          {submenu.submenuTitle}
        </span>
      </Link>
      <SubmenuItemLayout submenuItems={submenu.submenuItems} />
    </li>
  );
}

function SubmenuItemLayout({ submenuItems }: { submenuItems: MenuI[] }) {
  return (
    <ul>
      {submenuItems.map((submenuItem) => (
        <SubmenuItem key={submenuItem.navId} submenuItem={submenuItem} />
      ))}
    </ul>
  );
}

function SubmenuItem({ submenuItem }: { submenuItem: MenuI }) {
  return (
    <>
      <li className="text-lg text-white hover:text-main font-semibold my-3">
        <Link href={submenuItem.path}>{submenuItem.title}</Link>
      </li>
    </>
  );
}
