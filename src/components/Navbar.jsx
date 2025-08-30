import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "education", label: "Educational Qualifications"},
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-50">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6">
          <div className="flex gap-2 sm:gap-4 md:gap-6">
            {navItems.map((item) => (
              <li key={item.id} className="list-none">
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-50}
                  onSetActive={() => setActive(item.id)}
                  className={`cursor-pointer px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-all ${
                    active === item.id
                      ? "bg-cyan-500 text-white"
                      : "text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </div>
        </ul>
      </nav>
      <div className="hidden sm:flex fixed top-4 right-4 gap-2">
        <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-slate-800 text-gray-300">
          <a href="https://github.com/advaithrb" target="_blank" rel="noreferrer"
             className="cursor-pointer"
          >
            <FaGithub size={25}/>
          </a>
          <a href="https://www.linkedin.com/in/advaith-r-bharadwaj-b3a9bb327" target="_blank" rel="noreferrer"
             className="cursor-pointer"
          >
            <FaLinkedin size={25}/>
          </a>
        </div>
      </div>
      <div className="flex sm:hidden fixed top-4 right-4 gap-2">
        <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-slate-800 text-gray-300">
          <a href="https://github.com/advaithrb" target="_blank" rel="noreferrer"
             className="cursor-pointer"
          >
            <FaGithub size={25}/>
          </a>
          <a href="https://www.linkedin.com/in/advaith-r-bharadwaj-b3a9bb327" target="_blank" rel="noreferrer"
             className="cursor-pointer"
          >
            <FaLinkedin size={25}/>
          </a>
        </div>
      </div>
    </>
  );
}