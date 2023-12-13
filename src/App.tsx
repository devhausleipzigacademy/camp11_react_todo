import { useState } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";
import TodoList from "./components/TodoList";

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
        <TodoList />
      </Main>
      <Footer />
    </>
  );
}

export default App;
