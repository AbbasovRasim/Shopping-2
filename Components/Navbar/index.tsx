import React from "react";
import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="flex container pt-5 ">
      <nav className="container pt-5 flex justify-between items-center ">
        <Link href="/">
          <img className="w-1/2" src="/pictures/Fashion.jpg" alt="" />
          <div className="flex gap-5"> </div>
        </Link>{" "}
        <Link href="/Home">
          <input
            className="  border-gray-900 border rounded-lg p-2 mb-4 "
            type="text"
            placeholder="Search..."
          />
        </Link>
      </nav>
      <div className="gap-5 flex    ">
        <Link
          className="hover:underline  hover:text-gray-950  text-sm  text-gray-700 font-normal "
          href="/About "
        >
          About
        </Link>
        <Link
          className="hover:underline  hover:text-gray-950  text-sm  text-gray-700 font-normal "
          href="/Login"
        >
          Login
        </Link>
        <Link
          className="hover:underline  hover:text-gray-950  text-sm  text-gray-700 font-normal "
          href="Contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
