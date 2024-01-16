import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types";
import Image from "next/image";
import PopoverGallery from "./PopoverGallery";

interface GalleryProps {
  data: Product;
}

const Gallery = ({ data }: GalleryProps) => {
  return (
    <div className="relative">
      <Tabs defaultValue={`${data.images.highResImg[0]}-0`}>
        <PopoverGallery data={data}>
          {data.images.highResImg.map((image, index) => (
            <TabsContent key={index} value={`${image}-${index}`}>
              <Image
                className="my-5 rounded-xl"
                key={index}
                src={image}
                alt=""
              />
            </TabsContent>
          ))}
        </PopoverGallery>
        <TabsList>
          {data.images.highResImg.map((image, index) => (
            <TabsTrigger key={index} value={`${image}-${index}`}>
              <Image className="rounded-xl" key={index} src={image} alt="" />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Gallery;
