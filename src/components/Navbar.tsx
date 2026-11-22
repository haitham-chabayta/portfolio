import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export type NavbarProps = {
  itemsArray: {
    id: number;
    title: string;
    path: string;
    // extra route prefixes that should also mark this item as active
    activePrefixes?: string[];
  }[];
};

const Navbar = ({ itemsArray }: NavbarProps) => {
  const { pathname } = useLocation();
  const lowerPath = pathname.toLowerCase();

  const matchesPrefix = (prefixes?: string[]) =>
    !!prefixes?.some((prefix) => lowerPath.startsWith(prefix.toLowerCase()));

  return (
    <nav>
      <ul className="flex justify-around pb-1 bg-[rgba(0,0,0,0.6)] pt-10 ps-4 pe-[7.5rem]">
        {itemsArray.map((item) => (
          <li key={item.id} className="px-2">
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                "text-shadow-[0px_1px_5px_rgb(0,0,0)] font-bold text-2xl uppercase hover:text-primary hover:text-[28px] transition-all duration-300 " +
                (isActive || matchesPrefix(item.activePrefixes)
                  ? "text-primary"
                  : "text-white")
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="rounded-[2px] bg-[linear-gradient(to_right,rgba(var(--primary-rgb),0)_0%,rgba(var(--primary-rgb),1)_20%,rgba(var(--primary-rgb),1)_80%,rgba(var(--primary-rgb),0)_100%)] h-1 mx-4"></div>
    </nav>
  );
};
export default Navbar;
