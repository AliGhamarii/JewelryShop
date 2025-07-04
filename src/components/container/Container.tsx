import React from "react";

interface Icontainer {
  children: React.ReactNode;
}

export function Container({ children }: Icontainer) {
  return <div className="container mx-auto">{children}</div>;
}
