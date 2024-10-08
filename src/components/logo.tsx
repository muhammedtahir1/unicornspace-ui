"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      <h1 className="text-white dark:text-black ">hi</h1>
      {theme === "dark" ? (
        <Link href={"/"} className="flex items-center font-bold">
          <Image
            src={"/logos/logo-white-256x256.png"}
            width={30}
            height={30}
            alt="logo"
          />
          UnicornSpaceUI
        </Link>
      ) : (
        <Link href={"/"} className="flex items-center font-bold">
          <Image
            src={"/logos/logo-black-256x256.png"}
            width={30}
            height={30}
            alt="logo"
          />
          UnicornSpaceUI
        </Link>
      )}
    </>
  );
};

export default Logo;
