"use client";
import { useState } from "react";
import Link from "next/link";
import "../app/globals.css";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Darklightmode from "./Mini Component/Darklightmode";
import Login from "./Login";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navhandle = async () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div className="fixed bg-[#253553] w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl-px-16">
        <Image src="/assets/Logo.png " width="135" height="55" />
        <div className="flex justify-between">
          <ul className="hidden md:flex ">
            <Link href="Home">
              <li className="ml-10  text-white text-m uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="Notice">
              <li className="ml-10 text-white text-m uppercase hover:border-b">
                Notice
              </li>
            </Link>
            <Link href="About">
              <li className="ml-10 text-white text-m uppercase hover:border-b">
                About us
              </li>
            </Link>
            <Link href="Module">
              <li className="ml-10 text-white text-m uppercase hover:border-b">
                Module
              </li>
            </Link>
            <Darklightmode />
            <button
              onClick={() => setShowLogin(true)}
              className="text-white p-2 ml-10 shadow-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 text-2xl rounded-xl hover:scale-105 duration-300"
            >
              Login
            </button>
          </ul>
          <div className="md:hidden z-10 text-white" onClick={navhandle}>
            <AiOutlineMenu size={35} />
          </div>
        </div>
      </div>
      {/* Rest of your existing Navbar code */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60  flex items-center justify-center z-[101]">
          <Login onClose={() => setShowLogin(false)} />
        </div>
      )}
    </div>
  );
}
