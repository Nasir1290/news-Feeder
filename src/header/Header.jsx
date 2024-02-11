import React from "react";
import Category from "./Category";
import Search from "./Search";
import Logo from "./Logo";
import Date from "./Date";

export default function Header() {
  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <Date />
        <Logo />
        <Search />
      </div>
      <Category />
    </nav>
  );
}
