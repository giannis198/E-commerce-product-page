"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import iconPlus from "../public/icon-plus.svg";
import iconMinus from "../public/icon-minus.svg";
import { Button } from "./ui/button";
import Image from "next/image";
import CartIcon from "../public/white-icon-cart.svg";

interface Props {
  data: Product;
}

const formSchema = z.object({
  quantity: z.coerce.number().min(1),
});

const AddToCartForm = ({ data }: Props) => {
  const cart = useCart();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    cart.addItem(data, values.quantity);
    toast.success("Item added to cart!");
  }

  const { isSubmitting, isValid } = form.formState;
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative items-center justify-center gap-x-3 space-y-5 md:space-y-0 lg:flex"
        >
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormControl>
                  <div className="relative h-14 w-full md:block">
                    <Input
                      readOnly
                      className="h-full border-none bg-light_grayish_blue py-5 text-center text-lg font-bold"
                      placeholder="quantity"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute right-5 top-2 p-0 hover:opacity-50"
                      onClick={() => field.onChange(field.value + 1)}
                    >
                      <Image src={iconPlus} alt="plus" />
                    </Button>
                    <Button
                      disabled={field.value < 1}
                      type="button"
                      variant="ghost"
                      className="absolute left-5 top-2 p-0 hover:opacity-50"
                      onClick={() => {
                        if (field.value > 0) {
                          field.onChange(field.value - 1);
                        }
                      }}
                    >
                      <Image src={iconMinus} alt="plus" />
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            disabled={!isValid || isSubmitting}
            className="h-14 w-full gap-x-2 bg-Orange shadow-lg shadow-Orange/30 hover:bg-Orange hover:opacity-50	"
            type="submit"
          >
            <Image src={CartIcon} alt="cart" />
            <p>Add to cart</p>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddToCartForm;
