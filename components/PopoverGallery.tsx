import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/types";
import GalleryNew from "./GalleryNew";

interface PopoverGalleryProps {
  data: Product;
}

const PopoverGallery = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: PopoverGalleryProps["data"];
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className=" bg-transparent p-0">
          <GalleryNew data={data} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopoverGallery;
