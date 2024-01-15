"use client";

import Image from "next/image";
import { useState } from "react";
import Cart from "./Cart";
import sneakersLogo from "../public/logo.svg";

import MobileMenu from "./MobileMenu";
import NavLinks from "./Navlinks";
import Profile from "./Profile";
import Container from "./Container";
import CartCard from "./CartCard";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Navbar = () => {
  const [isCardClickled, setIsCardClickled] = useState(false);
  return (
    <Container>
      <nav className="my-4 flex items-center justify-between px-4 md:my-10">
        <div className="flex items-center justify-center gap-x-3 md:gap-x-16">
          <MobileMenu />

          <Link href="/">
            <Image src={sneakersLogo} alt="sneakers logo" />
          </Link>

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <Button
            variant="ghost"
            onClick={() => setIsCardClickled(!isCardClickled)}
          >
            <Cart />
          </Button>
          <Profile />
        </div>
      </nav>
      {isCardClickled && <CartCard />}
      <Separator />
    </Container>
  );
};

export default Navbar;
