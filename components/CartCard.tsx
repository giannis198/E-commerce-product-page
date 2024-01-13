"use client";

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import CartCardItem from "./CartCardItem";

const CartCard = () => {
  const cart = useCart();

  return (
    <div className="bt-20 absolute inset-x-2 right-auto top-20 z-10 w-[95%] pb-20">
      <div className="h-[30%]  space-y-5 rounded-xl bg-white px-5 py-7">
        <h2 className="text-lg font-bold text-very_dark_blue">Cart</h2>
        <Separator />
        <div className="h-[25vh] items-center justify-center overflow-auto text-center">
          {cart.items.length === 0 && (
            <p className="font-bold text-dark_grayish_blue">
              Your cart is empty.
            </p>
          )}

          {cart.items.map((item) => (
            <CartCardItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
