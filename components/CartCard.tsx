"use client";

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import CartCardItem from "./CartCardItem";
import { Button } from "./ui/button";

const CartCard = () => {
  const cart = useCart();

  return (
    <div className="absolute inset-x-2 top-20 z-10 w-[95%]  md:shadow-xl ">
      <div className="space-y-5  rounded-xl  bg-white px-5 py-4 drop-shadow-2xl md:absolute md:right-0 md:top-5 md:w-[20rem]">
        <h2 className="text-lg font-bold text-very_dark_blue">Cart</h2>
        <Separator />
        <div className="items-center justify-center overflow-auto text-center ">
          {cart.items.length === 0 && (
            <p className="py-10 text-center font-bold text-dark_grayish_blue">
              Your cart is empty.
            </p>
          )}
          <div className="space-y-3 ">
            {cart.items.map((item, index) => (
              <CartCardItem key={index} data={item} />
            ))}
            {cart.items.length > 0 && (
              <Button className="h-14 w-full bg-Orange font-bold">
                Checkout
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
