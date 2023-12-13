function Header() {
  return (
    <header className="bg-emerald-500 py-6 px-4 flex justify-between items-center">
      <h3 className="text-white font-semibold text-2xl cursor-pointer">Todo</h3>
      <ul className="flex gap-2">
        <NavItem href="/" text="Home" />
        <li>
          <a
            className="text-white uppercase font-semibold  hover:underline"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-white uppercase font-semibold  hover:underline"
            href="/about"
          >
            About us
          </a>
        </li>
        <li>
          <a
            className="text-white uppercase font-semibold  hover:underline"
            href="/shop"
          >
            Shop
          </a>
        </li>
        <li>
          <a
            className="text-white uppercase font-semibold  hover:underline"
            href="/blog"
          >
            Blog
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
