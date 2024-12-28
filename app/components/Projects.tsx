import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Website",
    description: "An online shopping platform with responsive design.",
    link: "https://hackathon-ecommerce-git-master-bakhtawars-projects-ab28cde8.vercel.app/",
    image: "/e-commerce.png"
  },
  {
    title: "Shareable Resume Builder",
    description: "A web app that allows users to create, edit, and share their resume.",
    link: "https://hackathon-milestone5-beta.vercel.app/",
    image: "/shareableResume.png"
  },
  {
    title: "Countdown Timer",
    description: "This countdown timer app allows users to set time, start, pause, and reset, displaying the remaining time at all stages",
    link: "https://vercel.com/bakhtawars-projects-ab28cde8/30-days-of-project/5ahDLDBNBNcwnjms3GeP1tSv5JXe",
    image: "/countdownTimer.png"
  },
  {
    title: "To-do List",
    description: "This Todo List app helps you manage and track your daily tasks, keeping you productive and organized. Easily add, update, and delete tasks to keep an overview of all your tasks in one place",
    link: "https://todolist-git-main-bakhtawars-projects-ab28cde8.vercel.app/",
    image: "/todo-list.png"
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <section id="projects" className="lg:min-h-screen py-10 px-5 md:px-10 bg-primary flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple tracking-widest font-grover">My Projects</h1>
        <p className="text-gray-400 mt-4 font-itim">Explore some of the projects I’ve worked on.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0B0D24] rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300 hover:bg-[#1c2051]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400} 
              height={160} 
              className="object-cover rounded-md mb-4 hover:opacity-90 transition-opacity duration-300"
            />
            <h2 className="text-2xl font-semibold text-white font-dancing hover:text-purple-300 transition-colors duration-300">
              {project.title}
            </h2>
            <p className="text-gray-400 mt-3 font-itim hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>
            <Link href={project.link} className="inline-block font-grover mt-5 text-purple font-medium hover:text-white transition-colors duration-300">
              View Project &rarr;
            </Link>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default ProjectsPage;
