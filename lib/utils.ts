import { type ClassValue, clsx } from "clsx";
import { log } from "console";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface calculateDiscountedPrice {
  originalPrice: number;
  discountPercentage: number;
}

// export function calculateDiscountedPrice(
//   originalPrice: number,
//   discountPercentage: number,
//   decimalPlaces: number = 2,
// ): number {
//   // Ensure the input values are valid
//   if (
//     typeof originalPrice !== "number" ||
//     typeof discountPercentage !== "number"
//   ) {
//     throw new Error(
//       "Invalid input. Both originalPrice and discountPercentage must be numbers.",
//     );
//   }

//   // Ensure discount percentage is within a valid range
//   if (discountPercentage < 0 || discountPercentage > 100) {
//     throw new Error(
//       "Invalid discount percentage. It must be between 0 and 100.",
//     );
//   }

//   // Calculate the discounted price
//   const discountAmount = (originalPrice * discountPercentage) / 100;
//   let discountedPrice = originalPrice - discountAmount;

//   discountedPrice = parseFloat(discountedPrice.toFixed(decimalPlaces));

//   // Round to two decimal places
//   return discountedPrice;
// }

export function calculateDiscountedPrice(
  originalPrice: number,
  discountPercentage: number,
  decimalPlaces: number = 2,
): string {
  // Ensure the input values are valid
  if (
    typeof originalPrice !== "number" ||
    typeof discountPercentage !== "number"
  ) {
    throw new Error(
      "Invalid input. Both originalPrice and discountPercentage must be numbers.",
    );
  }

  // Ensure discount percentage is within a valid range
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error(
      "Invalid discount percentage. It must be between 0 and 100.",
    );
  }

  // Calculate the discounted price
  const discountAmount = (originalPrice * discountPercentage) / 100;
  let discountedPrice = originalPrice - discountAmount;

  // Round to the specified decimal places
  discountedPrice = parseFloat(discountedPrice.toFixed(decimalPlaces));

  // Format the result with two decimal places
  const formattedResult = discountedPrice.toFixed(2);

  return formattedResult;
}
