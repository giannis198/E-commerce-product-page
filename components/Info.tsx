import { Badge } from "@/components/ui/badge";

interface CompanyNameProps {
  companyName: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  prevPrice: number;
}

const Info = ({
  companyName,
  title,
  description,
  price,
  discount,
  prevPrice,
}: CompanyNameProps) => {
  return (
    <div className="my-4 space-y-5 px-4 lg:my-10">
      <h2 className="text-Orange font-bold uppercase leading-loose tracking-widest">
        {companyName}
      </h2>
      <h1 className="text-very_dark_blue text-2xl font-bold capitalize">
        {title}
      </h1>
      <p className="text-dark_grayish_blue text-base	">{description}</p>
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <h1 className="text-very_dark_blue text-2xl font-bold">{`$${price}`}</h1>
          <Badge
            className="bg-pale_orange text-Orange rounded-md border-none text-base"
            variant="outline"
          >{`${discount}%`}</Badge>
        </div>
        <h4 className="text-grayish_blue line-through">{`$${prevPrice}`}</h4>
      </div>
    </div>
  );
};

export default Info;
