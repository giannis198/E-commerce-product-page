import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CartCard = () => {
  return (
    <div className="absolute inset-x-2 right-auto top-20 z-10 h-44 w-[95%]">
      <Card className="pb-20">
        <CardHeader className="gap-y-5">
          <CardTitle>Cart</CardTitle>
          <Separator />
          <CardDescription className="text-center">
            Your cart is empty
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CartCard;
