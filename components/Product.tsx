import Carouzel from "./Carouzel";
import Info from "./Info";
import { Product } from "@/types";
import { calculateDiscountedPrice } from "@/lib/utils";

interface ProductProps {
  data: Product;
}

const Product = ({ data }: ProductProps) => {
  const { images } = data;

  const finalPrice = calculateDiscountedPrice(data.prevPrice, data.discount, 2);

  const dataWithDiscount = { ...data, price: finalPrice };


  return (
    <>
      <Carouzel data={images.highResImg} />
      <Info data={dataWithDiscount} />
    </>
  );
};

export default Product;
