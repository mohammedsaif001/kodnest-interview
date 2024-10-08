"use client";

import { NAVBAR_LINKS } from "@/constants/data";
import { showToast } from "@/utils";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await axios.get("/api/logout");
    setTimeout(() => {
      router.push("/");
      showToast("success", "Logout Success");
    }, 300);
  };
  return (
    <header className="w-full text-md md:text-lg flex items-center h-[3rem] bg-primary-linear-gradient-main text-white justify-end px-5">
      <ul className="flex gap-5">
        {NAVBAR_LINKS.map((item) => {
          return (
            <li key={item?.href} className=" cursor-pointer hover:underline">
              <Link href={item?.href}>{item?.name}</Link>
            </li>
          );
        })}
        <p onClick={handleLogout} className="cursor-pointer hover:underline">
          Logout
        </p>
      </ul>
    </header>
  );
};
export default Navbar;
