import { ImageDataI } from "./ImagaData";

export interface FeedI {
  id?: string;
  thumbnail: ImageDataI;
  link: string;
  category: string;
  isExternalLink?: boolean;
  site: string;
  title: string;
  date?: Date;
}

export default class Feed implements FeedI {
  title: string;
  thumbnail: ImageDataI;
  category: string;
  site: string;
  link: string;
  id?: string = Math.random().toString(36).substring(2, 11);
  date?: Date | undefined;
  isExternalLink?: boolean | undefined;

  constructor({
    thumbnail,
    link,
    category,
    site,
    title,
    date = new Date(),
    isExternalLink = true,
  }: FeedI) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.category = category;
    this.site = site;
    this.link = link;
    this.date = date;
    this.isExternalLink = isExternalLink;
  }
}
