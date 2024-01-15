import Container from "@/components/Container";
import Product from "@/components/Product";
import image1 from "../public/image-product-1.jpg";
import image2 from "../public/image-product-2.jpg";
import image3 from "../public/image-product-3.jpg";
import image4 from "../public/image-product-4.jpg";
import thumb1 from "../public/image-product-1-thumbnail.jpg";
import thumb2 from "../public/image-product-2-thumbnail.jpg";
import thumb3 from "../public/image-product-3-thumbnail.jpg";
import thumb4 from "../public/image-product-4-thumbnail.jpg";

const page = () => {
  const data = {
    id: "1",
    company: "sneaker company",
    title: "fall limited edition sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: "",
    discount: 50,
    prevPrice: 250.0,
    images: {
      highResImg: [image1, image2, image3, image4],
      thumbnails: [thumb1, thumb2, thumb3, thumb4],
    },
  };

  return (
    <section>
      <Container>
        <Product data={data} />
      </Container>
    </section>
  );
};

export default page;
