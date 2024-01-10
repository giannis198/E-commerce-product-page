import Link from "next/link";

const NavLinks = () => {
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div className="grid gap-5 pt-20 text-xl font-bold text-black lg:grid-flow-col lg:gap-x-16 lg:pt-0">
      {navLinks.map((link) => (
        <Link className="hover:text-soft_red" key={link} href="#">
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
