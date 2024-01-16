import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CarouzelProps {
  data: string[] | StaticImageData[];
}

const Carouzel = ({ data }: CarouzelProps) => {
  return (
    <Carousel>
      <CarouselContent className="relative">
        {data.map((url, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            {url ? (
              <AspectRatio ratio={11 / 9}>
                <picture>
                  <Image src={url} alt={`Product ${index}`} />
                </picture>
              </AspectRatio>
            ) : (
              <p>No image available</p>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carouzel;
