import React from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/Footer";

interface Layout {
  children: React.ReactNode;
}
function Layout({ children }: Layout) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
