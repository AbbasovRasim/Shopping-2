import React from "react";
import Link from "next/link";
import Search from "@/app/Search/page";
import { FaRegHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
export const Navbar = () => {
  return (
    <div className=" ">
      {/* <div className=" flex gap-5 container  justify-center items-center">
        <div>
          <Link className="" href={"/"}>
            {" "}
            <img
              src="/pictures/Fashion.jpg"
              alt=""
              className="w-1/3 h-1/3"
            />{" "}
          </Link>
        </div>{" "}
        <Link
          className="hover:underline  hover:text-gray-950  text-sm  text-gray-700 font-normal "
          href="/Home"
        >
          Home
        </Link>{" "}
        <Link
          className="hover:underline  hover:text-gray-950  text-sm  text-gray-700 font-normal "
          href="/About "
        >
          About
        </Link>
        <Link
          className="hover:underline  hover:text-gray-950  text-sm  text-gray-700 font-normal "
          href="Contact"
        >
          Contact
        </Link>
      </div> */}
      <nav className="container pt-5 flex justify-between mt-5 fixed z-50 ">
        <Search />

        <div className="flex gap-5 ">
          <Link href={""}>
            <FaBalanceScale className=" w-7 h-7 " />
          </Link>
          <Link href={""}>
            <FaRegHeart className="w-7 h-7 " />
          </Link>{" "}
          <Link className="" href="/Cart">
            <SlBasket className="w-7 h-7 " />
          </Link>{" "}
        </div>
      </nav>
    </div>
  );
};
