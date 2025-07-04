import React from "react";
import { Navbar } from "../navbar/navbar";

interface Layout {
  children: React.ReactNode;
}
function Layout({ children }: Layout) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
