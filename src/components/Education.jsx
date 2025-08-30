import React from "react";

const education = [
  {
    id: "NIT, Surat",
    title: "BTech - Electrical Engineering",
    perf: "CGPA - 9.49",
    img: "/svnit copy.png",
    link: "https://www.svnit.ac.in/",
    time: "2024-2028",
  },
  {
    id: "DPS, South Bangalore",
    title: "Class 11 & 12 - CBSE",
    perf: "96.4%",
    img: "/dps copy.png",
    link: "https://south.dpsbangalore.edu.in/about-us/",
    time: "2022-2024",
  },
  {
    id: "BGS Public School",
    title: "Class LKG - 10 - CBSE",
    perf: "98.8%",
    img: "bgs copy.png",
    link: "https://bgspskengeri.edu.in/",
    time: "2010 - 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-base-200">
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2 className="text-3xl font-bold text-center">Educational Qualifications</h2>
      {education.map((edu, index) => (
        <a key={index} href={edu.link} >
            <div
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                position: "relative",
                overflow: "hidden",
            }}
            >
            <img
                src={edu.img}
                alt={edu.id}
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px", marginRight: "20px" }}
            />
            <div style={{ flex: 1 }}>
                <h2>{edu.id}</h2>
                <h3 style={{ margin: "0 0 8px 0", fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#fff" }}>
                {edu.title}
                </h3>
                <p style={{ margin: "0 0 4px 0", fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#fff" }}>
                {edu.perf}
                </p>
                <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#fff" }}>
                {edu.time}
                </p>
            </div>
            <svg
                width="100"
                height="100"
                fill="none"
                style={{ position: "absolute", top: 0, right: 0, opacity: 0.1, pointerEvents: "none" }}
            >
                <defs>
                <pattern
                    id={`pattern-${index}`}
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                    d="M-3 13 L15-5 M-5 5 L18-18 M-1 21 L17 3"
                    stroke="white"
                    strokeWidth="1"
                    />
                </pattern>
                </defs>
            </svg>
            </div>
        </a>
      ))}
    </div>
    </section>
  );
}