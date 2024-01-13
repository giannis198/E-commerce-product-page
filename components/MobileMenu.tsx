import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavLinks from "./Navlinks";

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="h-auto w-auto cursor-pointer lg:hidden"
            src="/icon-menu.svg"
            height={15}
            width={16}
            alt="hamburger menu"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <NavLinks />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
