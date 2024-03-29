// "use client";

// import { Product } from "@/types";
// import Image from "next/image";

// import { useCart } from "@/hooks/use-cart";

// interface Props {
//   data: Product;
// }

// const CartItem = ({ data }: Props) => {
//   const cart = useCart();

//   const onRemove = () => {
//     cart.removeItem(data.id);
//   };

//   return (
//     <li className="flex border-b py-6">
//       <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
//         <Image
//           fill
//           src={data.images.highResImg[0]}
//           alt=""
//           className="object-cover object-center"
//         />
//       </div>
//       <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//         <div className="absolute right-0 top-0 z-10">
//           <IconButton onClick={onRemove} icon={<X size={15} />} />
//         </div>
//         <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//           <div className="flex justify-between">
//             <p className=" text-lg font-semibold text-black">{data.title}</p>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;
