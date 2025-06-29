"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when About section is in view
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // 50% of the section must be visible for the animation to trigger
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    const currentRef = aboutRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex flex-col pt-28 items-center justify-center bg-[#0D1729] text-white py-16 px-6 md:px-20"
    >
      {/* About Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold font-grover mb-10 md:mb-10 text-center text-purple tracking-widest"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-24 max-w-4xl">
        
        {/* Image Section */}
        <motion.div
          className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-96 rounded-full overflow-hidden flex-shrink-0"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <Image
            src="/profile.png"
            alt="Profile picture"
            width={250}
            height={250}
            className="object-cover rounded-full"
          />
        </motion.div>
        
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left max-w-lg font-itim"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="mb-4 text-gray-400 text-sm md:text-base lg:text-lg">
            Hello! I'm a passionate and detail oriented Frontend Developer and Digital Marketer with hands on experience in modern web technologies including HTML, CSS, JavaScript, TypeScript, Next.js, React and Tailwind CSS. I specialize in creating clean, responsive, and user-friendly interfaces. I also have a strong eye for design, with practical skills in Figma and Canva for UI/UX prototyping and branding materials.
          </p>
          <p className="mb-5 text-gray-400 text-sm md:text-base lg:text-lg">
            Additionally, I’m well-versed in Python for scripting and automation, and I bring value as a Digital Marketer, helping businesses grow through strategies in SEO, social media marketing, and paid ads. I’m dedicated to delivering high-quality results and turning your ideas into functional, impactful digital experiences.
          </p>

          {/* Button Section */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 font-grover">
            <motion.a
              href="https://hackathon-project-alpha-ecru.vercel.app/"
              download="Bakhtawar_Abdul_Kareem_CV.pdf"
              className="bg-lightPurple border-2 border-purple text-white py-2 px-4 rounded-md hover:bg-purple hover:border-transparent cursor-pointer text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="/contact"
              className="bg-lightPurple border-2 border-purple text-white py-2 px-4 rounded-md hover:bg-purple hover:border-transparent cursor-pointer text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
