import Logo from "../shared/Logo";
import Navbar from "./navbar";
import { AlignJustify } from "lucide-react";
import NavButtons from "./navButtons";
const Header = () => {
  return (
    <header className="container flex justify-between items-center mt-6 max-sm:flex-row-reverse">
      <Logo />
      <Navbar />
      <NavButtons />
      <AlignJustify className="hidden max-lg:block" />
    </header>
  );
};

export default Header;
