import { Badge } from "@/components/ui/badge";
import AddToCartForm from "./AddToCartForm";

import { Product } from "@/types";

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  return (
    <div className="mx-4 my-4 space-y-5 lg:my-10">
      <h2 className="font-bold uppercase leading-loose tracking-widest text-Orange">
        {data.company}
      </h2>
      <h1 className="text-2xl font-extrabold capitalize text-very_dark_blue md:text-4xl">
        {data.title}
      </h1>
      <p className="text-base text-dark_grayish_blue">{data.description}</p>
      <div className="flex justify-between md:block">
        <div className="flex gap-x-3">
          <p className="text-2xl font-bold text-very_dark_blue">{`$${data.price}`}</p>
          <Badge
            className="rounded-md border-none bg-pale_orange text-base text-Orange"
            variant="outline"
          >{`${data.discount}%`}</Badge>
        </div>
        <p className="text-grayish_blue line-through">{`$${data.prevPrice}`}</p>
      </div>
      <AddToCartForm data={data} />
    </div>
  );
};

export default Info;
