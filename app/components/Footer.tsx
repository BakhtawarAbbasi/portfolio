"use client"
import { useState } from 'react';
import React from 'react';
import { FiMenu } from 'react-icons/fi'; // Importing a menu icon

const Footer: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <footer className="bg-[#0B0D24] py-10 text-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
                {/* About Me with Menu Icon */}
                <div className="relative">
                    <div className="flex justify-center items-center">
                        <h2 className="text-purple font-grover text-lg font-normal mb-2 flex-grow text-center">About Me</h2>

                        {/* Menu Icon */}
                        <button
                            className="md:hidden"
                            onClick={() => setShowMenu(!showMenu)}
                            aria-label="Toggle Menu"
                        >
                            <FiMenu className="text-white w-6 h-6 ml-2" />
                        </button>
                    </div>
                    <p className="font-dancing text-white text-center">Hello! I'm Bakhtawar, a passionate frontend developer and video editor.</p>
                </div>

                {/* Quick Links */}
                <div className={`text-lg text-white ${showMenu ? 'block' : 'hidden'} md:block`}>
                    <h2 className="text-purple font-grover font-normal mb-2 text-center">Quick Links</h2>
                    <a href="#home" className="block hover:text-purple hover:underline transition duration-300 mt-2 font-dancing">
                        Home
                    </a>
                    <a href="#about" className="block hover:text-purple hover:underline transition duration-300 mt-2 font-dancing">
                        About
                    </a>
                    <a href="#skills" className="block hover:text-purple hover:underline transition duration-300 mt-2 font-dancing">
                        Skills
                    </a>
                    <a href="#projects" className="block hover:text-purple hover:underline transition duration-300 mt-2 font-dancing">
                        Projects
                    </a>
                    <a href="#contact" className="block hover:text-purple hover:underline transition duration-300 mt-2 font-dancing">
                        Contact
                    </a>
                </div>

                {/* Contact Me */}
                <div>
                    <h2 className="text-purple font-grover text-lg font-normal mb-2 text-center">Contact Me</h2>
                    <ul className="space-y-1 font-dancing text-white text-center">
                        <li>Email:bakhtawarabbasi009@gmail.com</li>
                        <li>Address: North Karachi, Pakistan</li>
                    </ul>
                </div>

                {/* Follow Me */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-purple font-grover text-lg font-normal mb-2 text-center">Follow Me</h2>
                    <div className='flex justify-center space-x-4 text-2xl'>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="transform hover:scale-125 hover:rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <img src="/facebook-icon.png" alt="Facebook" className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com/in/bakhtawar-abbasi-59ba15304/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="transform hover:scale-125 hover:-rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
                        </a>
                        <a
                            href="https://instagram.com/bakhtawar5867/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="transform hover:scale-125 hover:rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <img src="/instagrams.png" alt="Instagram" className="w-8 h-8" />
                        </a>
                        <a
                            href="https://github.com/BakhtawarAbbasi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="transform hover:scale-125 hover:-rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <img src="/github-icon.png" alt="GitHub" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
