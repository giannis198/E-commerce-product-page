import Link from "next/link";
import React from "react";
import Container from "./Container";
const Footer = () => {
  return (
    <Container>
      <section className="flex items-center justify-center">
        <div className="attribution mx-4">
          Challenge by&nbsp;
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor <br />
          </Link>
          Coded by&nbsp;
          <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
            Ioannis Nikitopoulos
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Footer;
