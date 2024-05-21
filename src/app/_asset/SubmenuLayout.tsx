import { MenuI } from "@/public/class/Menu";
import Link from "next/link";

export default function SubmenuLayout({
  isActive,
  submenus,
  rootPath
}: {
  isActive: boolean;
  submenus: { submenuTitle: string; submenuItems: MenuI[]; submenuPath: string }[] | undefined;
  rootPath: string;
}) {
  return (
    <li className="w-full absolute top-full">
      <ul
        className={`w-full absolute top-full transition-all flex overflow-hidden ${
          isActive ? "" : "opacity-0 h-0"
        }`}
      >
        {submenus?.map((submenu) => (
          <Submenu key={submenu.submenuTitle} submenu={submenu} rootPath={rootPath+submenu.submenuPath} />
        ))}
      </ul>
    </li>
  );
}

function Submenu({
  submenu,
  rootPath
}: {
  submenu: { submenuTitle: string; submenuItems: MenuI[] };
  rootPath: string;
}) {
  return (
    <li className="w-1/3">
      <Link href={`${rootPath}${submenu.submenuItems[0].path}`}>
        <span className="block text-sm text-sub my-2 hover:text-main">
          {submenu.submenuTitle}
        </span>
      </Link>
      <SubmenuItemLayout submenuItems={submenu.submenuItems} rootPath={rootPath}/>
    </li>
  );
}

function SubmenuItemLayout({ submenuItems, rootPath }: { submenuItems: MenuI[], rootPath:string }) {
  return (
    <ul>
      {submenuItems.map((submenuItem) => (
        <SubmenuItem key={submenuItem.navId} submenuItem={submenuItem} rootPath={rootPath} />
      ))}
    </ul>
  );
}

function SubmenuItem({ submenuItem, rootPath }: { submenuItem: MenuI, rootPath:string }) {
  return (
    <>
      <li className="text-lg text-white hover:text-main font-semibold my-3">
        <Link href={`${rootPath}${submenuItem.path}`}>{submenuItem.title}</Link>
      </li>
    </>
  );
}
