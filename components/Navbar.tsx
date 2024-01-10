"use client";

import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLinks from "./Navlinks";
import Cart from "./Cart";
import Profile from "./Profile";
import Container from "./Container";

import { Button } from "./ui/button";
import { useState } from "react";
import CartCard from "./CartCard";

const Navbar = () => {
  const [isCardClickled, setIsCardClickled] = useState(false);
  return (
    <Container>
      <nav className="my-4 flex items-center  justify-between px-4 lg:my-10">
        <div className="flex items-center justify-center gap-x-3">
          <MobileMenu />
          <Image src="/logo.svg" height={20} width={138} alt="w" />

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-5">
          <Button
            variant="link"
            onClick={() => setIsCardClickled(!isCardClickled)}
          >
            <Cart />
          </Button>
          <Profile />
        </div>
      </nav>
      <div>{isCardClickled && <CartCard />}</div>
    </Container>
  );
};

export default Navbar;
