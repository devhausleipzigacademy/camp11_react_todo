import NavItem, { type NavItem as NavItemType } from "./NavItem";
import { MdOutlineMenu } from "react-icons/md";

type Props = {
  navItems: NavItemType[];
  onOpenHandler: (x: boolean) => void;
};

function Header({ navItems, onOpenHandler }: Props) {
  return (
    <header className="bg-emerald-500 py-6  px-4 flex justify-between items-center">
      <h3 className="text-white font-semibold text-2xl cursor-pointer">Todo</h3>
      <nav>
        <MdOutlineMenu
          onClick={() => onOpenHandler(true)}
          className="text-white  text-3xl cursor-pointer md:hidden"
        />
        <ul className="gap-2 hidden md:flex ">
          {navItems.map((item, idx) => (
            <NavItem anchorColor="text-white" href={item.href} key={idx}>
              {item.text}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
