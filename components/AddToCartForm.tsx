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

const formSchema = z.object({
  quantity: z.coerce.number().min(1),
});

import { Button } from "./ui/button";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";

const AddToCartForm = ({ price }: { price: number }) => {
  const cart = useCart();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values.quantity);
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
                      variant="link"
                      className="absolute right-3 top-3 rounded-full "
                      onClick={() => field.onChange(field.value + 1)}
                    >
                      <Image
                        src="/icon-plus.svg"
                        width={12}
                        height={12}
                        alt="plus"
                      />
                    </Button>
                    <Button
                      type="button"
                      variant="link"
                      className="absolute left-3 top-3 rounded-full"
                      onClick={() => {
                        if (field.value > 0) {
                          field.onChange(field.value - 1);
                        }
                      }}
                    >
                      <Image
                        src="/icon-minus.svg"
                        width={12}
                        height={4}
                        alt="plus"
                      />
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
