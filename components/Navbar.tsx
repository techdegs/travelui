"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-semibold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {menuOpen && (
        <>
          <Image
            onClick={() => setMenuOpen(false)}
            src="/close.svg"
            alt="close"
            width={30}
            height={30}
            className="text-red-900 bg-red-900 p-1 rounded-full cursor-pointer absolute z-30 right-8"
          />
          <ul className="flex z-20 bg-white shadow-lg absolute flex-col gap-4 w-52 px-8 pt-12 pb-12 h-72 right-0 top-[2px] mt-5 mb-4 text-right transition-all delay-500">
            {NAV_LINKS.map((link) => (
              <>
                <Link
                  className="regular-16 text-right text-gray-800 cursor-pointer pb-1.5 transition-all hover:font-semibold"
                  href={link.href}
                  key={link.key}
                >
                  {link.label}
                </Link>
              </>
            ))}
          </ul>
        </>
      )}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        onClick={() => setMenuOpen(true)}
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden inline-block cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
