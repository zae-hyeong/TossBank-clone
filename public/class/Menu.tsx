export interface MenuI {
  title: string;
  path: string;
  navId: string;
  subMenus?: {
    subTitle: string, 
    menus: MenuI[]
  }[]
}

export default class Menu implements MenuI{
  title: string;
  path: string;
  navId: string;
  subMenus?: {
    subTitle: string, 
    menus: MenuI[]
  }[]

  constructor({title, path, navId, subMenus}: MenuI) {
    this.title = title;
    this.path = path;
    this.navId = navId;
    this.subMenus = subMenus;
  }
}