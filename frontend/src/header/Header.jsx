import React, { useEffect, useState } from "react";
import Category from "./Category";
import Search from "./Search";
import Logo from "./Logo";
import Date from "./Date";

export default function Header() {
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);
  console.log(screenSize);
  return (
    <nav className="py-4 md:py-4 fixed top-0 w-full !bg-[#7e96cf] z-50">
      <div className="container mx-auto flex items-center  gap-x-1">
        {screenSize >= 600 && (
          <>
            <Date />
            <Logo />
          </>
        )}
        <Category />
        <Search />
      </div>
    </nav>
  );
}
