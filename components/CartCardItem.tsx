import { Product } from "@/types";
import Image from "next/image";
import trashCan from "../public/icon-delete.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import toast from "react-hot-toast";

interface CartCardItemProps {
  data: {
    product: Product;
    quantity: number;
  };
}

const CartCardItem = ({ data }: CartCardItemProps) => {
  const cart = useCart();

  const finalPrice = ((data.product.price as number) * data.quantity).toFixed(
    2,
  );

  const onRemove = () => {
    cart.removeItem(data.product.id);
    toast.success("Item removed from cart.");
  };

  return (
    <section>
      <div className="grid grid-cols-[.65fr_2fr_auto] items-center gap-x-2">
        <Image
          className="rounded-lg object-cover object-center"
          src={data.product.images?.thumbnails[0]}
          alt={data.product.title}
        />
        <div className="w-full space-y-1 text-start">
          <Link className="capitalize" href="/">
            {data.product.title}
          </Link>
          <p className="leading-tight">
            ${data.product.price} x {data.quantity}&nbsp;
            <span className="font-bold">${finalPrice}</span>
          </p>
        </div>
        <Button onClick={onRemove} className="px-3 py-1" variant="destructive">
          <Image src={trashCan} alt="trash can" />
        </Button>
      </div>
    </section>
  );
};

export default CartCardItem;
