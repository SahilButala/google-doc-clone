import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search_Input from "./search_input";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-full w-full p-4">
      <div className="flex gap-3 items-center  shrink-0 pr-6">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={95} height={95} />
        </Link>
      </div>
      <Search_Input/> 
      <div/>
    </div>
  );
};

export default Navbar;
