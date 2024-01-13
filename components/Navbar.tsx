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
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

const Navbar = () => {
  const [isCardClickled, setIsCardClickled] = useState(false);
  return (
    <Container>
      <nav className="my-4 flex items-center justify-between px-4 lg:my-10">
        <div className="flex items-center justify-center gap-x-3">
          <MobileMenu />
          <Image src="/logo.svg" height={20} width={138} alt="w" />

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-5">
          <Button
            variant="default"
            className="rounded-full bg-white hover:bg-slate-100"
            onClick={() => setIsCardClickled(!isCardClickled)}
          >
            <Suspense fallback={<Skeleton className="h-5 w-5 rounded-full" />}>
              <Cart />
            </Suspense>
          </Button>
          <Profile />
        </div>
      </nav>
      {isCardClickled && <CartCard />}
    </Container>
  );
};

export default Navbar;
