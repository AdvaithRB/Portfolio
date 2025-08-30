import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-base-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-base-content/70">© {new Date().getFullYear()} Advaith R Bharadwaj • Built with React & Tailwind</p>
        <div className="join">
          <a href="#home" className="btn btn-sm join-item">Home</a>
          <a href="#projects" className="btn btn-sm join-item">Projects</a>
          <a href="#skills" className="btn btn-sm join-item">Skills</a>
          <a href="#contact" className="btn btn-sm join-item">Contact</a>
        </div>
      </div>
    </footer>
  )
}
