import { Product } from "@/types";
import Image from "next/image";
import trashCan from "../public/icon-delete.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import toast from "react-hot-toast";

interface CartCardItemProps {
  data: Product;
}

const CartCardItem = ({ data }: CartCardItemProps) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
    toast.success("Item removed from cart.");
  };

  return (
    <div>
      <div className="grid grid-cols-[.60fr_2fr_auto] items-center gap-x-2 pb-2">
        <Image
          className="rounded-lg object-cover object-center"
          src={data.images.thumbnails[0]}
          alt={data.title}
        />
        <div className="text-start capitalize">
          <Link href="/">{data.title}</Link>
          <p>{data.price}</p>
        </div>
        <Button onClick={onRemove} variant="ghost" className="p-0">
          <Image src={trashCan} alt="trash can" />
        </Button>
      </div>
    </div>
  );
};

export default CartCardItem;
