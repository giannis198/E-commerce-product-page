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
import { Input } from "@/components/ui/input";

import iconPlus from "../public/icon-plus.svg";
import iconMinus from "../public/icon-minus.svg";

const formSchema = z.object({
  quantity: z.coerce.number().min(1),
});

import { Button } from "./ui/button";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import toast from "react-hot-toast";

interface Props {
  data: Product;
}

const AddToCartForm = ({ data }: Props) => {
  const cart = useCart();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const dataWithFinalPrice = { ...data, price: values.quantity * data.price };
    const itemOne = cart.items.filter((item) => item.id === data.id);
    console.log(itemOne);

    cart.additem(dataWithFinalPrice);
    toast.success("Item added to cart!");
  }

  const { isSubmitting, isValid } = form.formState;
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative space-y-20"
        >
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormControl>
                  <div className="relative">
                    <Input
                      readOnly
                      className="absolute border-none bg-light_grayish_blue p-7 text-center text-lg font-bold"
                      placeholder="quantity"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute right-3 top-3"
                      onClick={() => field.onChange(field.value + 1)}
                    >
                      <Image src={iconPlus} alt="plus" />
                    </Button>
                    <Button
                      disabled={field.value < 1}
                      type="button"
                      variant="ghost"
                      className=" absolute left-3 top-3"
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
            className="w-full bg-Orange shadow-lg shadow-Orange/30	"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddToCartForm;
