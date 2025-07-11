"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const titles = ["Frontend Developer", "Digital Marketor", "UI/UX Designer"];

const MainSection: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[index % titles.length];
      if (deleting) {
        setText(currentTitle.substring(0, text.length - 1));
        setSpeed(100);
      } else {
        setText(currentTitle.substring(0, text.length + 1));
        setSpeed(200);
      }

      if (!deleting && text === currentTitle) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, index, speed]);

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg.png')" }}>
      <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-5 md:p-10 bg">

        {/* Left Side: Text */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block 2xl:mb-20 2xl:text-7xl 2xl:p-4 font-itim tracking-widest text-lg border-2 border-purple px-4 py-1 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Welcome to my portfolio
          </div>

          <h1 className="text-5xl 2xl:text-7xl 2xl:pb-20 font-grover font-light text-white">
            Hi! I&apos;m Bakhtawar,{" "}
            <span className="text-purple brightness-125">
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>

          <p className="text-gray-300 2xl:pb-20 2xl:text-5xl md:text-base font-itim">
            Hello, I&apos;m a frontend developer and Digital Marketor.
          </p>

          <motion.button
            className="bg-transparent 2xl:pb-8 2xl:text-2xl font-itim text-white border border-gray-300 py-2 px-5 rounded-full hover:bg-purple transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
          >
            <Link href="#contact">Let&apos;s Connect</Link>
          </motion.button>
        </motion.div>

        {/* Right Side: Profile Image (Hidden on small screens) */}
        <motion.div
          className="hidden md:flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/profile.png"
            alt="Profile Image"
            width={300}
            height={300}
            className="rounded-full shadow-lg 2xl:w-[500px] 2xl:h-[700px]"
          />
        </motion.div>

      </section>
    </div>
  );
};

export default MainSection;
