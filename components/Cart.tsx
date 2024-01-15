"use client";

import Image from "next/image";
import iconCart from "../public/icon-cart.svg";
import { useCart } from "@/hooks/use-cart";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { items } = useCart();

  // Calculate the total quantity
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <Image alt="shopping cart" src={iconCart} />
      <Badge className=" absolute right-0 top-0 h-4 w-4 -translate-y-2  translate-x-2 justify-center bg-Orange">
        {totalQuantity}
      </Badge>
    </div>
  );
};

export default Cart;
