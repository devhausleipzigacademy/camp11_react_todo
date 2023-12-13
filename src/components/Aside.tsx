import { FaChevronCircleRight } from "react-icons/fa";
import NavItem, { type NavItem as NavItemType } from "./header/NavItem";

type Props = {
  navItems: NavItemType[];
  onCloseHandler: (x: boolean) => void;
};

function Aside({ navItems, onCloseHandler }: Props) {
  return (
    <aside className="fixed h-screen w-[250px] bg-white shadow-md  top-0 right-0 flex flex-col gap-6 md:hidden">
      <div className="py-6 px-4 border-b-2 border-emerald-500">
        <FaChevronCircleRight
          onClick={() => onCloseHandler(false)}
          className="text-3xl text-emerald-500 cursor-pointer"
        />
      </div>
      <ul className="flex flex-col gap-2 px-4">
        {navItems.map((item, idx) => (
          <NavItem key={idx} anchorColor="text-slate-900" href={item.href}>
            {item.text}
          </NavItem>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
