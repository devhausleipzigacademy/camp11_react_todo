import { useState } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/about-us", text: "About Us" },
    { href: "/shop", text: "Shop" },
  ];

  return (
    <>
      <Header navItems={navItems} onOpenHandler={setIsOpen} />
      {isOpen && <Aside navItems={navItems} onCloseHandler={setIsOpen} />}
      <Main>
        <h1>hello world</h1>
        <p>Here is my main content!</p>
      </Main>
      <Footer />
    </>
  );
}

export default App;
