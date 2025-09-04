import React from "react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Budge Budge Institute of Technology, Kolkata, West Bengal",
    years: "2022-2026 | Pursuing",
    image: "/cropped_circle_image.png", // College image
  },
  {
    degree: "Higher Secondary Certificate in Science (PCM Group)",
    institution: "Adarsh Sr. Sec School Chausa, Buxar | BSEB",
    years: "2020-2022 | Completed",
    image: "/cropped_circle_image.png", // School image (same as college)
  },
];

const EducationSection = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center text-white mb-8">
      Education
    </h2>
    <div className="flex flex-col gap-8 items-center">
      {educationData.map((edu, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center gap-6 bg-black/80 rounded-xl p-6 w-full max-w-2xl shadow"
        >
          {edu.image && (
            <img
              src={edu.image}
              alt={edu.institution}
              className="w-24 h-24 rounded-full object-cover border border-white/10 shadow-soft"
            />
          )}
          <div className="flex flex-col text-white text-center md:text-left">
            <span className="text-xl font-semibold mb-1">{edu.degree}</span>
            <span className="text-base mb-1">{edu.institution}</span>
            <span className="text-sm text-cyan-400">{edu.years}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
