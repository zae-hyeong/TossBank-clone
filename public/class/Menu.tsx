export interface MenuI {
  title: string;
  path: string;
  navId: string;
  submenus?: {
    submenuTitle: string;
    submenuPath: string;
    submenuItems: MenuI[];
  }[];
}

export default class Menu implements MenuI {
  title: string;
  path: string;
  navId: string;
  submenus?: {
    submenuTitle: string;
    submenuPath: string;
    submenuItems: MenuI[];
  }[];

  constructor({ title, path, navId, submenus }: MenuI) {
    this.title = title;
    this.path = path;
    this.navId = navId;
    this.submenus = submenus;
  }
}
