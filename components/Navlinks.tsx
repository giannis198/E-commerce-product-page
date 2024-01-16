import Link from "next/link";

const NavLinks = () => {
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <ul className="grid gap-5 pt-20 text-xl font-bold text-dark_grayish_blue md:grid-flow-col md:gap-x-16 md:pt-0">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link key={link} className="relative" href="#">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
