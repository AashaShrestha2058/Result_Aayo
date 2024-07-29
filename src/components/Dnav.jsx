"use client";
import Link from "next/link";
import Image from "next/image";
import Darklightmode from "./Mini Component/Darklightmode";
import Search from "./Mini Component/Search";

export default function Dnav() {
  return (
    <div className="fixed bg-[#253553] w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl-px-16">
        <Image src="/assets/Logo.png " width="135" height="55" alt="Logo" />

        <Search />

        <Darklightmode />
      </div>
    </div>
  );
}
