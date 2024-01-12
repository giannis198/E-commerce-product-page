import { Badge } from "@/components/ui/badge";
import AddToCartForm from "./AddToCartForm";

interface CompanyNameProps {
  id: string,
  companyName: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  prevPrice: number;
}

const Info = ({
  id,
  companyName,
  title,
  description,
  price,
  discount,
  prevPrice,
}: CompanyNameProps) => {
  return (
    <div className="my-4 space-y-5 px-4 lg:my-10">
      <h2 className="font-bold uppercase leading-loose tracking-widest text-Orange">
        {companyName}
      </h2>
      <h1 className="text-2xl font-bold capitalize text-very_dark_blue">
        {title}
      </h1>
      <p className="text-base text-dark_grayish_blue	">{description}</p>
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <h1 className="text-2xl font-bold text-very_dark_blue">{`$${price}`}</h1>
          <Badge
            className="rounded-md border-none bg-pale_orange text-base text-Orange"
            variant="outline"
          >{`${discount}%`}</Badge>
        </div>
        <h4 className="text-grayish_blue line-through">{`$${prevPrice}`}</h4>
      </div>
      <AddToCartForm price={price} />
    </div>
  );
};

export default Info;
