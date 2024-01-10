import Container from "@/components/Container";
import Product from "@/components/Product";
import product1 from "../public/image-product-1.jpg";
import product2 from "../public/image-product-2.jpg";
import product3 from "../public/image-product-3.jpg";
import product4 from "../public/image-product-4.jpg";

const page = () => {
  const product = {
    id: "1",
    company: "sneaker company",
    title: "fall limited edition sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 0,
    discount: 50,
    prevPrice: 250,
    images: [product1, product2, product3, product4],
  };

  return (
    <div>
      <Container>
        <Product data={product} />
      </Container>
    </div>
  );
};

export default page;
