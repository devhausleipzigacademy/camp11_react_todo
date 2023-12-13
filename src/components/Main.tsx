import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function Main({ children }: Props) {
  return <main className="container mx-auto mt-[50px]">{children}</main>;
}

export default Main;
