import { StaticImageData } from "next/image";
import { title } from "process";

export interface BannerI {
  title: string;
  subtitle?: string;
  image: StaticImageData;
  link?: string;
  id?: string;
}

export default class Banner implements BannerI {
  title: string;
  subtitle?: string;
  image: StaticImageData;
  link?: string;
  id?: string = Math.random().toString(36).substring(2, 11);
  constructor({ title, subtitle, image, link = "#" }: BannerI) {
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;
    this.link = link;
  }
}
