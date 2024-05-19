import { ImageDataI } from "./ImagaData";

export interface BannerI {
  title: string;
  subtitle?: string;
  imageData: ImageDataI;
  link?: string;
  id?: string;
}


export default class Banner implements BannerI {
  title: string;
  subtitle?: string;
  imageData: ImageDataI;
  link?: string;
  id?: string = Math.random().toString(36).substring(2, 11);
  constructor({ title, subtitle, imageData, link = "#" }: BannerI) {
    this.title = title;
    this.subtitle = subtitle;
    this.imageData = imageData;
    this.link = link;
  }
}
