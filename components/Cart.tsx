import Image from "next/image";
import iconCart from "../public/icon-cart.svg";

const Cart = () => {
  return (
    <>
      <Image alt="shopping cart" src={iconCart} />
    </>
  );
};

export default Cart;
