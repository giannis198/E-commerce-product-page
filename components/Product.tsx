import Carouzel from "./Carouzel";
import Info from "./Info";
import { Product } from "@/types";
import { calculateDiscountedPrice } from "@/lib/utils";

import Gallery from "./Gallery";

interface ProductProps {
  data: Product;
}

const Product = ({ data }: ProductProps) => {
  const { images } = data;

  const finalPrice = calculateDiscountedPrice(data.prevPrice, data.discount, 2);

  const dataWithDiscount = {
    ...data,
    price: finalPrice,
  };

  return (
    <section>
      <div className="items-center justify-between md:flex md:px-16 md:py-20 lg:gap-x-16">
        <div className="md:hidden">
          <Carouzel data={images.highResImg} />
        </div>
        <div className="hidden w-[50%] md:inline-block">
          <Gallery data={data} />
        </div>

        <div className="md:w-[50%]">
          <Info data={dataWithDiscount} />
        </div>
      </div>
    </section>
  );
};

export default Product;
