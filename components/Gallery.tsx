import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types";
import Image from "next/image";

interface GalleryProps {
  data: Product;
}

const Gallery = ({ data }: GalleryProps) => {
  return (
    <div className="w-[35rem]">
      <Tabs defaultValue={`${data.images.highResImg[0]}-0`}>
        {data.images.highResImg.map((image, index) => (
          <TabsContent key={index} value={`${image}-${index}`}>
            <div>
              <Image
                className="mb-20 rounded-xl"
                key={index}
                src={image}
                alt=""
              />
            </div>
          </TabsContent>
        ))}

        <TabsList>
          {data.images.highResImg.map((image, index) => (
            <TabsTrigger
              className="mx-2"
              key={index}
              value={`${image}-${index}`}
            >
              <Image className="rounded-xl" key={index} src={image} alt="" />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Gallery;
