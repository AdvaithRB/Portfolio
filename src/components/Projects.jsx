import React from 'react';

const items = [
  {
    title: 'Line Follower Robot',
    desc: '5 IR sensors, L293D driver, dual motors. Digital pin logic & PID tweakable.',
    img: '/linefollower.jpeg'
  },
  {
    title: 'IoT Data Logger',
    desc: 'ESP32 + multiple sensors, sending data back to a web dash board',
    img: '/iot.jpeg'
  },
  {
    title: 'Web profile',
    desc: 'My static Webpofile created when I was still in my learning phase with some projects that I have worked on',
    img: '/portfolio copy.png',
    link: 'https://advaithrb.github.io/Pr-02/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, img, link }, i) => (
            <div key={i} className="card bg-base-100 shadow hover:shadow-lg transition">
              {img ? (
                <figure>
                  <img src={img} alt={title} className="h-48 w-full object-cover" />
                </figure>
              ) : null}
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="text-base-content/80">{desc}</p>
                {link ? (
                  <div className="card-actions justify-end">
                    <a className="btn btn-sm btn-primary" href={link} target="_blank" rel="noreferrer">View</a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
