import React from "react";

type Props = {
  children: React.ReactNode[];
};

function Main({ children }: Props) {
  return <main className="container mx-auto">{...children}</main>;
}

export default Main;
