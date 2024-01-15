import Link from "next/link";
import React from "react";
import Container from "./Container";
const Footer = () => {
  return (
    <Container>
      <section className="attribution mx-auto">
        Challenge by
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . Coded by
        <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
          Ioannis Nikitopoulos
        </Link>
      </section>
    </Container>
  );
};

export default Footer;
