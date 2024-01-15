import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  title: string;
  company: string;
  description: string;
  price: string | number;
  discount: number;
  prevPrice: number;
  images: {
    highResImg: string[] | StaticImageData[];
    thumbnails: string[] | StaticImageData[];
  };
}
