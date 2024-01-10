import { StaticImageData } from "next/image";
import Carouzel from "./Carouzel";
import Info from "./Info";
import { Product } from "@/types";
import { calculateDiscountedPrice } from "@/lib/utils";

interface ProductProps {
  data: Product;
}

const Product = ({ data }: ProductProps) => {
  const {
    id,
    title,
    description,
    company,
    price,
    discount,
    prevPrice,
    images,
  } = data;

  const finalPrice = calculateDiscountedPrice(prevPrice, discount, 2);

  return (
    <div>
      <Carouzel data={images} />
      <Info
        companyName={company}
        title={title}
        description={description}
        price={finalPrice}
        discount={discount}
        prevPrice={prevPrice}
      />
    </div>
  );
};

export default Product;
