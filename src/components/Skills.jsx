import React from 'react';
import { SiC, SiArduino, SiEslint, SiEspressif, SiProteus, SiReact, SiTailwindcss, SiCplusplus, SiPython, SiJavascript }  from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from 'react-icons/fa';

const SKILLS = [
  { name: 'C', icon: <SiC /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Arduino', icon: <SiArduino /> },
  { name: 'ESP32', icon: <SiEspressif /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Proteus', icon: <SiProteus /> },
  { name: 'Bootstrap', icon: <BsBootstrapFill /> },
  { name: 'HTML', icon: <DiHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <SiJavascript />}
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SKILLS.map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl border bg-base-100 shadow-sm hover:shadow-md transition">
              <div className="text-2xl text-primary">{s.icon}</div>
              <div className="font-semibold">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
