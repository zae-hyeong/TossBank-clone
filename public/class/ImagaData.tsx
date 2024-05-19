import { StaticImageData } from "next/image";

export interface ImageDataI {
  src: StaticImageData | string;
  alt: string;
}

export default class ImageData implements ImageDataI {
  src: string | StaticImageData;
  alt: string;
  constructor(src: string | StaticImageData, alt: string) {
    this.src = src;
    this.alt = alt;
  }
};
