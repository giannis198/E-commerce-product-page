import { Product } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CarouzelNewProps {
  data: Product;
}

const GalleryNew = ({ data }: CarouzelNewProps) => {
  return (
    <Carousel className="relative">
      <CarouselContent className="">
        {data.images.highResImg.map((url, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            {url ? (
              <AspectRatio ratio={16 / 14}>
                <Image
                  className="rounded-xl"
                  src={url}
                  alt={`Product ${index}`}
                />
              </AspectRatio>
            ) : (
              <p>No image available</p>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-5" />
      <CarouselNext className="-right-5" />
    </Carousel>
  );
};

export default GalleryNew;
