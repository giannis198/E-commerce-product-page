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
    discount,
    prevPrice,
    images,
  } = data;

  const finalPrice = calculateDiscountedPrice(prevPrice, discount, 2);

  return (
    <>
      <Carouzel data={images} />
      <Info
      id={id}
        companyName={company}
        title={title}
        description={description}
        price={finalPrice}
        discount={discount}
        prevPrice={prevPrice}
      />
    </>
  );
};

export default Product;
