"use client";

import { usePathname } from "next/navigation";
import React, { Children, FC, ReactNode } from "react";
import Header from "./static/Header";

interface iProp {
  children: ReactNode;
}

const MainLayout: FC<iProp> = async ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/register" || pathname === "/signIn") {
    return (
      <div>
        <div>{children}</div>;
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div>{children}</div>
      </div>
    );
  }
};

export default MainLayout;
