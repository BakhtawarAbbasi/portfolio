"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Let’s Connect", isButton: true },
  ];

  return (
    <header className="bg-primary text-white px-4 py-2 md:px-8 md:py-4 font-itim">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-32 md:w-40">
          <Image
            src="/logo.png"
            alt="Bakhtawar Abdul Kareem Logo"
            width={500}
            height={300}
            className="bg-transparent"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 ml-auto">
          {links.map(({ href, label, isButton }) => (
            <a
              key={href}
              href={href}
              className={`${
                isButton
                  ? "bg-transparent border border-gray-300 py-2 px-5 rounded-full hover:bg-purple hover:text-white"
                  : "hover:text-purple hover:underline"
              } transition duration-300`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-3xl" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {navOpen && (
        <nav className="md:hidden flex flex-col space-y-2 mt-4 bg-primary text-white px-4 py-4 rounded-md">
          {links.map(({ href, label, isButton }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleNav}
              className={`${
                isButton
                  ? "bg-transparent border border-gray-300 py-2 px-5 rounded-full hover:bg-purple hover:text-white"
                  : "hover:text-purple hover:underline"
              } transition duration-300`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
