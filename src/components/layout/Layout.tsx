import React from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/Footer";

interface Layout {
  children: React.ReactNode;
}
function Layout({ children }: Layout) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
