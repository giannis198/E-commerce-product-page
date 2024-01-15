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
      <div className="items-center justify-between md:flex md:gap-x-16 md:px-16 md:py-20">
        <div className="md:hidden">
          <Carouzel data={images.highResImg} />
        </div>
        <div className="hidden md:block">
          {/* <Gallery data={data} /> */}
          <Gallery data={data} />
        </div>

        <div className="md:w-[40%]">
          <Info data={dataWithDiscount} />
        </div>
      </div>
    </section>
  );
};

export default Product;
