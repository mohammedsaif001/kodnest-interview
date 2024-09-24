"use client";

import { NAVBAR_LINKS } from "@/constants/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex items-center h-[3rem] bg-primary-linear-gradient-main text-white justify-end px-5">
      <ul className="flex gap-5">
        {NAVBAR_LINKS.map((item) => {
          return (
            <li
              key={item?.href}
              className=" cursor-pointer text-lg hover:underline"
            >
              <Link href={item?.href}>{item?.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
export default Navbar;
