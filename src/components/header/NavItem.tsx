export type NavItem = {
  text: string;
  href: string;
};

type Props = {
  children: string;
  href: string;
  anchorColor: string;
};

function NavItem({ children, href, anchorColor }: Props) {
  return (
    <li>
      <a
        className={`${anchorColor} uppercase font-semibold  hover:underline`}
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

export default NavItem;
