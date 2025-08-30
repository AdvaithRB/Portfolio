import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <form
          action="https://formspree.io/f/mandewlq"
          method="POST"
          className="mt-8 space-y-4 card bg-base-100 shadow p-6"
        >
          <div className="form-control">
            <label className="label"><span className="label-text">Name</span></label>
            <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input name="email" type="email" placeholder="you@example.com" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Message</span></label>
            <textarea name="message" className="textarea textarea-bordered" rows="5" placeholder="Let's build something!" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Send</button>
          <div className="mt-4 flex justify-center gap-4">
            <p>-OR-</p>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/advaith-r-bharadwaj-b3a9bb327" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
            <a href="https://github.com/advaithrb" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
          </div>
        </form>
      </div>
    </section>
  )
}
