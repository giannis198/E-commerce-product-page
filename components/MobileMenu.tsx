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
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <div className="cursor-pointer lg:hidden">
            <Image
              className="h-auto w-auto"
              src="/icon-menu.svg"
              height={15}
              width={16}
              alt="hamburger menu"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left">
          <div>
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
