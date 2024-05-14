export interface HeaderNavigationMenuI {
  title: string;
  path: string;
  navId: string;
}

export default class HeaderNavigationMenu implements HeaderNavigationMenuI{
  title: string;
  path: string;
  navId: string;

  constructor({title, path, navId}: HeaderNavigationMenuI) {
    this.title = title;
    this.path = path;
    this.navId = navId;
  }
}