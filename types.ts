import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  title: string;
  company: string;
  description: string;
  price: number;
  discount: number;
  prevPrice: number;
  images: string[] | StaticImageData[];
}