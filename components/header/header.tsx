import Logo from "../shared/Logo";
import { Button } from "../ui/button";
import Navbar from "./navbar";
import { AlignJustify } from "lucide-react";
const Header = () => {
  return (
    <header className="container flex justify-between items-center mt-6 max-sm:flex-row-reverse">
      <Logo />
      <Navbar />
      <div className="flex gap-4 max-lg:hidden">
        <Button className="bg-black border-2 rounded-3xl w-28 h-10">
          Contact us
        </Button>
        <Button className="bg-primary-color rounded-3xl w-24 h-10">
          Join us
        </Button>
      </div>
      <AlignJustify className="hidden max-lg:block" />
    </header>
  );
};

export default Header;
